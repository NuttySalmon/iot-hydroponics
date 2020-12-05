from dataclasses import dataclass
from datetime import datetime, timedelta
from peripheral_manager import PeripheralManager
from settings import Settings
from util import led_on_now, strip_time


class Behaviour:
    def __init__(self, peri_config):
        """constructor

        :param settings: currentSettings
        :type settings: settings.Settings
        """
        self.in_seconds = peri_config.in_seconds
        self.delta_unit = "seconds" if self.in_seconds else "mintues"
        self.peri = PeripheralManager(peri_config)
        self.settings = None
        self._led_next = None
        self._fan_next = None
        self._flood_next = None
        self._drain_next = None
        self.is_flood = False
        self.valve_open_time = peri_config.valve_open_time
        self.turn_off_all()
        if peri_config.flood_immediately:
            print("Flood immediately: {}".format(peri_config.flood_immediately))
            self.is_flood = True
            self.peri.pump_on()
            self.peri.valve_close()
        else:
            self.is_flood = False
        self.update_settings(None)
    def turn_off_all(self):
        self.peri.pump_off()
        self.peri.led_off()
        self.peri.valve_close()

    @property
    def data(self):
        return self.peri.data

    def update_temp_hum(self):
        self.peri.grab_temp_hum()

    def update_settings(self, new_settings):
        """
        :type new_settings: dict(str, int)
        """
        self.settings = Settings(new_settings)
        self._led_next_cal()
        self._fan_next_cal()
        self._flood_next_cal(self.is_flood)
        print(self.settings.ledOnTime, self.settings.ledOffTime)
        self.peri.update_LED_color(
            self.settings.red, self.settings.green, self.settings.blue
        )
        ledOn = led_on_now(self.settings.ledOnTime, self.settings.ledOffTime)
        if ledOn:
            self.peri.led_on()
        else:
            self.peri.led_off()

        print("LED on now? ", ledOn)
        print(self._led_next, self._fan_next, self._flood_next)

    def interval_next(self, duration, interval, curr_value=None):
        now = strip_time(datetime.now())
        next_delta = interval if not curr_value else duration
        return strip_time(now + timedelta(**{self.delta_unit: next_delta}))

    def _led_next_cal(self):
        now = datetime.now()
        on_hr = self.settings.ledOnTime
        off_hr = self.settings.ledOffTime

        led_is_on = led_on_now(on_hr, off_hr)
        if led_is_on:
            next_hr = off_hr
        else:
            next_hr = on_hr

        next_time = now + timedelta(hours=next_hr)
        self._led_next = strip_time(next_time)

    def _fan_next_cal(self):
        fan_is_on = self.data.fanOn
        self._fan_next = self.interval_next(
            self.settings.fanDuration, self.settings.fanInterval, fan_is_on
        )

    def _flood_next_cal(self, is_flood):
        self._flood_next = self.interval_next(
            self.settings.floodDuration, self.settings.floodFreq + self.valve_open_time, is_flood
        )

    def _drain_next_cal(self):
        now = datetime.now()
        delta = timedelta(**{self.delta_unit: self.valve_open_time})
        self._drain_next = strip_time(now + delta)

    def flood(self):
        print("Flood start")
        self.is_flood = True
        self.peri.valve_close()
        self.peri.pump_on()
        return True

    def drain(self):
        self.is_flood = False
        self.peri.pump_off()
        print("Drain start")
        self.peri.valve_open()
        self._drain_next_cal()
        return False

    def update_all(self):
        now = strip_time(datetime.now())
        # print("TIme now:", now)
        # toggle led when times up and calculate next time
        if now == self._led_next:
            print("LED time's up")
            self.peri.led_toggle()
            self._led_next_cal()

        # toggle fan when times up and calculate next time
        if now == self._fan_next:
            print("Fan time's up")
            self.peri.fan_toggle()
            self._fan_next_cal()

        # set flood and calculate next action time
        if now == self._flood_next:
            if self.is_flood:
                is_flood=self.drain()
            else:
                is_flood=self.flood()
            # done here to prevent multiple calls
            self._flood_next_cal(is_flood=is_flood)

        if now == self._drain_next:
            print("Drain time's up")
            self.peri.valve_close()
            # to prevent multiple calls
            self._drain_next = None
            

    def water_level_flood_control(self):
        water_level = self.peri.grab_water_level()
        print(water_level)
        if water_level:
            print("Water level reached")
            self.peri.pump_off()

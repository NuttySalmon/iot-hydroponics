from dataclasses import dataclass
from datetime import datetime, timedelta
from peripheral_manager import PeripheralManager
from settings import Settings
from util import led_on_now, strip_time


def interval_next(duration, interval, curr_value=None):
    now = datetime.now()
    next_delta = interval if not curr_value  else duration
    return strip_time(now + timedelta(seconds=next_delta))


class Behaviour:
    def __init__(self):
        """constructor

        :param settings: currentSettings
        :type settings: settings.Settings
        """
        self.settings = None
        self._led_next = None
        self._fan_next = None
        self._flood_next = None
        self._peri = PeripheralManager()
        self.update_settings(None)

    @property
    def data(self):
        return self._peri.data

    def update_settings(self, new_settings):
        """
        :type new_settings: dict(str, int)
        """
        self.settings = Settings(new_settings)
        self._led_next_cal()
        self._fan_next_cal()
        self._flood_next_cal()
        print(self.settings.ledOnTime, self.settings.ledOffTime)
        if led_on_now(self.settings.ledOnTime, self.settings.ledOffTime):
            self._peri.led_on()
        else:
            self._peri.led_off()

        print(self._led_next, self._fan_next, self._flood_next)

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
        self._fan_next = interval_next(
            self.settings.fanDuration, self.settings.fanInterval, fan_is_on
        )

    def _flood_next_cal(self):
        is_flood = self.data.pumpOn
        self._flood_next = interval_next(
            self.settings.floodDuration, self.settings.floodFreq, is_flood
        )

    def update_all(self):
        now = strip_time(datetime.now())
        print(now)
        print("fan", self._fan_next)
        if now == self._led_next:
            self._peri.led_toggle()
            self._led_next_cal()
        if now == self._fan_next:
            self._peri.fan_toggle()
            self._fan_next_cal()

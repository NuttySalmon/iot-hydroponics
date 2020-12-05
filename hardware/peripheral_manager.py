from led import LED
from data import Data
from temp_hum import Temp_Hum
from GPIO import GPIOIn, GPIOOut


class PeripheralManager:
    def __init__(self, pin_config):
        self.data = Data()
        self.led = LED()
        self.temp_hum = Temp_Hum()
        self.led_color = (0, 0, 0)
        self.pump = GPIOOut(pin_config.pump_pin)
        self.valve_active = GPIOOut(pin_config.valve_pin)
        self.water_level = GPIOIn(pin_config.water_level_pin)
        self.fan = GPIOOut(pin_config.fan_pin)
            
    def update_LED_color(self, red, green, blue):
        self.led_color = (red, green, blue) 

    def fan_toggle(self):
        self.data.fanOn = not self.data.fanOn
        self.fan.set(1 if self.data.fanOn else 0)
        print("Fan: {}".format(self.data.fanOn))

    def pump_on(self):
        self.data.pumpOn = True
        self.pump.set(1)
        print("Pump On")

    def pump_off(self):
        self.data.pumpOn = False
        self.pump.set(0)
        print("Pump off.")

    def valve_open(self):
        print("Valve open")
        self.data.valveClosed = False
        self.valve_active.set(1)

    def valve_close(self):
        print("Valve closed")
        self.data.valveClosed = True
        self.valve_active.set(0)

    def led_toggle(self):
        self.data.ledOn = not self.data.ledOn

        if self.data.ledOn:
            self.led.colorWipe(self.led_color)
        else:
            self.led.colorWipe((0, 0, 0))

        print("LED: {}".format(self.data.ledOn))

    def led_on(self):
        self.data.ledOn = True
        self.led.colorWipe(self.led_color)
        print("LED on")

    def led_off(self):
        self.data.ledOn = False
        self.led.colorWipe((0, 0, 0))
        print("LED off")

    def grab_water_level(self):
        return self.water_level.get()

    def grab_temp_hum(self):
        self.data.hum, self.data.temp = self.temp_hum.get()

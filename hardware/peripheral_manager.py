from led import LED
from data import Data
from temp_hum import Temp_Hum


class PeripheralManager:
    def __init__(self):
        self.data = Data()
        self.led = LED()
        self.temp_hum = Temp_Hum()
        self.led_color = (0, 0, 0)
    
    def update_LED_color(self, red, green, blue):
        self.led_color = (red, green, blue)

    def fan_toggle(self):
        self.data.fanOn = not self.data.fanOn
        print('Fan: {}'.format(self.data.fanOn))
    
    def flood_start(self):
        self.data.pumpOn = True
        self.data.valveClosed = True
        print('Pump: {}'.format(self.data.pumpOn))
    
    def pump_off(self):
        self.data.pumpOn = False
        print('Pump turned off')

    def led_toggle(self):
        self.data.ledOn = not self.data.ledOn

        if self.data.ledOn:
            self.led.colorWipe(self.led_color)
        else:
            self.led.colorWipe((0, 0, 0))

        print('LED: {}'.format(self.data.ledOn))
    
    def led_on(self):
        self.data.ledOn = True
        self.led.colorWipe(self.led_color)
        print('LED on')
    
    def led_off(self):
        self.data.ledOn = False
        self.led.colorWipe((0, 0, 0))
        print('LED off')

    def grab_temp_hum(self):
        self.data.temp = self.temp_hum.get_temp()
        self.data.hum = self.temp_hum.get_hum()

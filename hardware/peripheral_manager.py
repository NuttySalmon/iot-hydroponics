from led import LED
from data import Data


class PeripheralManager:
    def __init__(self):
        self.data = Data()
        self.led = LED()
    
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
        print('LED: {}'.format(self.data.ledOn))
    
    def led_on(self):
        self.data.ledOn = True
        print('LED on')
    
    def led_off(self):
        self.data.ledOff = False
        print('LED off')

    def grab_temp_hum(self):
        #TODO: change to real data
        self.data.temp = 10
        self.data.hum = 10
        print('Grabbed temp hum')

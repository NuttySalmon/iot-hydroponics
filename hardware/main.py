from signal import signal, SIGINT
from sys import exit
from config import IOT_CONFIG, PERI_CONFIG 
from hydroponics import Hydroponics


instance = Hydroponics(IOT_CONFIG, PERI_CONFIG, iot_disabled=False)
def handler(signal_received, frame):
    instance.turn_off_all()
    print('SIGINT or CTRL-C detected. Exiting gracefully')
    exit(0)

if __name__ == "__main__":
    signal(SIGINT, handler) 
    instance.start()






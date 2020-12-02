from config import IOT_CONFIG, PERI_CONFIG 
from hydroponics import Hydroponics

if __name__ == "__main__":
    instance = Hydroponics(IOT_CONFIG, PERI_CONFIG)
    instance.start()

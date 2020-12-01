from config import IOT_CONFIG
from hydroponics import Hydroponics

if __name__ == "__main__":
    instance = Hydroponics(IOT_CONFIG)
    instance.start()

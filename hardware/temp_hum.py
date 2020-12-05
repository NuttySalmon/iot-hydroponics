import board
import Adafruit_DHT
import time


# Initial the dht device, with data pin connected to:
TIME_OUT = 5

sensor = Adafruit_DHT.DHT11


class Temp_Hum:
    def __init__(self):
        self.pin = 5
    def get(self):
        counter = 0
        while True:
            try:
                return Adafruit_DHT.read_retry(sensor, self.pin)
                return value
            except Exception:
                print("Retry temp_hum...")
                counter = counter + 1
                if counter is TIME_OUT:
                    return None


if __name__ == "__main__":
    temp_hum = Temp_Hum()
    while True:
        print(temp_hum.get())
        time.sleep(0.1)

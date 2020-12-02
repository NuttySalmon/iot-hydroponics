import board
import adafruit_dht
import time


# Initial the dht device, with data pin connected to:
TIME_OUT = 5


class Temp_Hum:
    def __init__(self):
        self.DHTDevice = adafruit_dht.DHT11(board.D17)
        # self.temperature_f = self.temperature_c * (9 / 5) + 32
        self.humidity = self.DHTDevice.humidity

    def get_temp(self):
        counter = 0
        while True:
            try:
                value = self.DHTDevice.temperature
                # print("temp: {}".format(value))
                return value
            except Exception:
                print("Retry temp...")
                counter = counter + 1
                if counter is TIME_OUT:
                    return None

    def get_hum(self):
        counter = 0
        while True:
            try:
                value = self.DHTDevice.humidity
                # print("hum: {}".format(value))
                return value
            except Exception:
                print("Retry hum...")
                counter = counter + 1
                if counter is TIME_OUT:
                    return None


if __name__ == "__main__":
    temp_hum = Temp_Hum()
    while True:
        print(temp_hum.get_temp())
        time.sleep(0.1)
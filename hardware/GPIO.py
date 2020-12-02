import time
import RPi.GPIO as gpio

gpio.setmode(gpio.BCM)


class GPIOAdapter:
    def __init__(self, pin_number):
        self.pin_number = pin_number


class GPIOIn(GPIOAdapter):
    def __init__(self, pin_number):
        super().__init__(pin_number)
        gpio.setup(self.pin_number, gpio.IN)

    def get(self):
        return gpio.input(self.pin_number)


class GPIOOut(GPIOAdapter):
    def __init__(self, pin_number):
        super().__init__(pin_number)
        gpio.setup(self.pin_number, gpio.OUT)

    def set(self, value):
        gpio_value = 0 if value is 0 else 1
        gpio.output(self.pin_number, gpio_value)


if __name__ == "__main__":
    try:
        test_pin = GPIOOut(18)
        value = 1
        for _ in range(10):
            test_pin.set(value)
            value = 1 if value is 0 else 0 
            time.sleep(5)
    except KeyboardInterrupt:
        pass
    except:
        pass
    finally:
        pass

from threading import Thread
from data import Data
from settings import Settings
from time import sleep

SETTINGS = Settings()
DATA = Data() 

def run_task_interval(interval=1):
    def decorator(function):
        def wrapper(*args, **kwargs):
            while(1):
                result = function(*args, **kwargs)
                sleep(interval)
            return result
        return wrapper
    return decorator


@run_task_interval(10)
def publish():
    print("publish")

def set_settings():
    pass 

@run_task_interval(2)
def get_data():
    print("data")

def main():
    t1 = Thread(target=publish)
    t2 = Thread(target=get_data)
    t1.start()
    t2.start()


if __name__ == "__main__":
    main()

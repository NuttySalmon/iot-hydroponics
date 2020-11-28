import json
from config import IOT_CONFIG
from aws_iot_client import IoTClient
from threading import Event, Thread
from data import Data
from settings import Settings
from time import sleep

PUBLISH_INTERVAL = 60


def run_task_interval(interval=1):
    def decorator(function):
        def wrapper(*args, **kwargs):
            while 1:
                result = function(*args, **kwargs)
                sleep(interval)
            return result

        return wrapper

    return decorator


class Hydroponics:
    def __init__(self, iot_config):

        self.current_settings = Settings()
        self.current_data = Data()
        topic_prefix = "iothydroponics/device/{}".format(IOT_CONFIG.client_id)
        settings_topic = "{}/settings".format(topic_prefix)
        device_update_topic = "{}/data".format(topic_prefix)
        self.iot_config = iot_config
        self.client = IoTClient(
            settings_topic=settings_topic,
            device_update_topic=device_update_topic,
            **self.iot_config.__dict__
        )
        self.publish_thread = Thread(target=self.publish_at_interval)

    @run_task_interval(60)
    def publish_at_interval(self):
        self.publish()

    def publish(self):
        print(
            "Publish: \n data:{}\n settings:{}\n".format(
                self.current_data, self.current_settings
            )
        )
        self.client.publish_update(self.current_data, self.current_settings)

    # Callback when the subscribed topic receives a message

    def on_message_received(self, topic, payload, **kwargs):
        new_settings = json.loads(payload)
        print("New settings: {}\n".format(new_settings))
        self.current_settings.set_with_dict(new_settings)
        self.publish()  # republish immediately

    def start(self):
        self.client.subscribe_topic(self.on_message_received)
        self.iot_client_run_thread = Thread(target=self.client.run)
        self.iot_client_run_thread.start()
        self.publish_thread.start()


if __name__ == "__main__":
    instance = Hydroponics(IOT_CONFIG)
    instance.start()
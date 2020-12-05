# Modified from AWS IoT SDK sample code pubsub.py
# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0.

import json
from awscrt import io, mqtt
from awsiot import mqtt_connection_builder
import sys
from threading import Event


verbosity = io.LogLevel.NoLogs.name


io.init_logging(getattr(io.LogLevel, verbosity), "stderr")


# Callback when connection is accidentally lost.
def on_connection_interrupted(connection, error, **kwargs):
    print("Connection interrupted. error: {}".format(error))


# Callback when an interrupted connection is re-established.
def on_connection_resumed(connection, return_code, session_present, *kwargs):
    print(
        "Connection resumed. return_code: {} session_present: {}".format(
            return_code, session_present
        )
    )

    if return_code == mqtt.ConnectReturnCode.ACCEPTED and not session_present:
        print("Session did not persist. Resubscribing to existing topics...")
        resubscribe_future, _ = connection.resubscribe_existing_topics()

        # Cannot synchronously wait for resubscribe result because we're on the connection's event-loop thread,
        # evaluate result with a callback instead.
        resubscribe_future.add_done_callback(on_resubscribe_complete)


def on_resubscribe_complete(resubscribe_future):
    resubscribe_results = resubscribe_future.result()
    print("Resubscribe results: {}".format(resubscribe_results))

    for topic, qos in resubscribe_results["topics"]:
        if qos is None:
            sys.exit("Server rejected resubscribe to topic: {}".format(topic))


class IoTClient:
    def __init__(
        self,
        endpoint,
        cert_path,
        key_path,
        root_ca_path,
        client_id,
        settings_topic,
        device_update_topic,
    ):
        self.endConnection = Event()
        event_loop_group = io.EventLoopGroup(1)
        host_resolver = io.DefaultHostResolver(event_loop_group)
        client_bootstrap = io.ClientBootstrap(event_loop_group, host_resolver)
        self.endpoint = endpoint
        self.cert = cert_path
        self.key = key_path
        self.root_ca = root_ca_path
        self.settings_topic = settings_topic
        self.data_topic = device_update_topic
        self.client_id = client_id
        self.mqtt_connection = mqtt_connection_builder.mtls_from_path(
            endpoint=self.endpoint,
            cert_filepath=self.cert,
            pri_key_filepath=self.key,
            client_bootstrap=client_bootstrap,
            ca_filepath=self.root_ca,
            on_connection_interrupted=on_connection_interrupted,
            on_connection_resumed=on_connection_resumed,
            client_id=self.client_id,
            clean_session=False,
            keep_alive_secs=6,
        )

        print(
            "Connecting to {} with client ID '{}'...".format(
                self.endpoint, self.client_id
            )
        )

        self.connect_future = self.mqtt_connection.connect()

        # Future.result() waits until a result is available
        self.connect_future.result()
        print("Connected!")
        self.settings_topic = settings_topic
        self.data_topic = device_update_topic

    def publish_update(self, data, settings):
        """Publish device info to update topic

        :param data: Device current data
        :type data: data.Data
        :param settings: Device current settings
        :type settings: settings.Settings
        """
        payload = {"data": data.__dict__, "settings": settings.__dict__}
        self.mqtt_connection.publish(
            topic=self.data_topic,
            payload=json.dumps(payload),
            qos=mqtt.QoS.AT_LEAST_ONCE,
        )

    def subscribe_topic(self, callback):
        print("Subscribing to topic '{}'...".format(self.settings_topic))
        subscribe_future, packet_id = self.mqtt_connection.subscribe(
            topic=self.settings_topic, qos=mqtt.QoS.AT_LEAST_ONCE, callback=callback
        )

        subscribe_result = subscribe_future.result()
        print("Subscribed with {}".format(str(subscribe_result["qos"])))

    def run(self):
        self.endConnection.wait()

    def close(self):
        print("test")
        self.endConnection.set()
        self.mqtt_connection.disconnect()

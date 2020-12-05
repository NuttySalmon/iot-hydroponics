from dataclasses import dataclass

"""
**********************
Important:

COPY this file and RENAME to 'config.py'
and FILL in the fields as instructed
Do not push this file
**********************
"""


@dataclass
class Config:
    """Class for keeping track of an item in inventory."""

    endpoint: str
    key_path: str
    cert_path: str
    root_ca_path: str
    client_id: str


IOT_CONFIG = Config(
    endpoint="",  # AWS IoT endpoint
    key_path="",  # absolute path to private key
    root_ca_path="",  # abosolute path to AWS root ca
    client_id="",  # device id. must match database and setup
    cert_path="",  # absolute path to device certificate
)
from dataclasses import dataclass

@dataclass
class Data:
  fan_on: bool = False
  led_on: bool = False
  temp: float = None
  hum: float = None
  pump_on: bool = False
  valve_closed: bool = False
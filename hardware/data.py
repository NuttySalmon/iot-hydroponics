from dataclasses import dataclass

@dataclass
class Data:
  fanOn: bool = False
  ledOn: bool = False
  temp: float = 23.5 
  hum: float = 83
  pumpOn: bool = False
  valveClosed: bool = False
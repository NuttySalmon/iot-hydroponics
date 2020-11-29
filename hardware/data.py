from dataclasses import dataclass

@dataclass
class Data:
  fanOn: bool = False
  ledOn: bool = False
  temp: float = 0 
  hum: float = 0
  pumpOn: bool = False
  valveClosed: bool = False
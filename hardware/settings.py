from dataclasses import dataclass


@dataclass
class Settings:
    floodFreq: int = 0
    floodDuration: int = 0
    ledOnTime: int = 12
    ledOffTime: int = 12
    fanDuration: int = 0
    fanInterval: int = 0
    red: int = 0
    green: int = 0
    blue: int = 0

    def set_with_dict(self, input):
        """Set attributes with dictionary

        :param input: Dictionary with attribute name as key
        :type input: dict(string, int)
        """
        for key, value in input.items():
            setattr(self, key, value)

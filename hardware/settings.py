
class Settings:
    def __init__(self, settings_dict = None):
        """constructor

        :type settings_dict: dict(str, int)
        """
        if settings_dict is None:
            self.floodFreq = 0
            self.floodDuration = 0
            self.ledOnTime = 12
            self.ledOffTime = 12
            self.fanDuration = 0
            self.fanInterval = 0
            self.red = 0
            self.gree = 0
            self.blue = 0
        else:
            self.set_with_dict(settings_dict)

    def set_with_dict(self, input):
        """Set attributes with dictionary

        :param input: Dictionary with attribute name as key
        :type input: dict(string, int)
        """
        for key, value in input.items():
            setattr(self, key, value)

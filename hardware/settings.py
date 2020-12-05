
class Settings:
    def __init__(self, settings_dict = None):
        """constructor

        :type settings_dict: dict(str, int)
        """
        if settings_dict is None:
            self.floodFreq = 5 
            self.floodDuration = 30
            self.ledOnTime = 8 
            self.ledOffTime = 12
            self.fanDuration = 5
            self.fanInterval = 20
            self.red = 0
            self.green = 150 
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

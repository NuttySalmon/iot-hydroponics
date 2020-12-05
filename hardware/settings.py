
class Settings:
    def __init__(self, settings_dict = None):
        """constructor

        :type settings_dict: dict(str, int)
        """
        if settings_dict is None:
            self.floodFreq = 10 
            self.floodDuration = 7 
            self.ledOnTime = 8 
            self.ledOffTime = 23
            self.fanDuration = 5
            self.fanInterval = 20
            self.red = 80 
            self.green = 30 
            self.blue = 80 
        else:
            self.set_with_dict(settings_dict)

    def set_with_dict(self, input):
        """Set attributes with dictionary

        :param input: Dictionary with attribute name as key
        :type input: dict(string, int)
        """
        for key, value in input.items():
            setattr(self, key, value)

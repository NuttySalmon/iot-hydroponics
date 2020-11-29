
from datetime import datetime

def strip_time(dt):
    """Strip time microsecond and second

    :param dt: datetime to be stripped
    :type dt: datetime.datetime
    :return: stripped datetime
    :rtype: datetime.datetime
    """
    return dt.replace(microsecond=0)

def led_on_now(on_hr, off_hr):
    now = datetime.now().hour
    if off_hr == on_hr :
        return False
    if off_hr > on_hr:
        return now < off_hr and now >= on_hr
    else:
        return now < off_hr or now >= on_hr
            

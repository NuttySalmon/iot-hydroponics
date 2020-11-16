import moment from 'moment'

export const calcIsOnline = (lastUpdated: Date): boolean => {
  const now = moment(Date.now())
  const duartionSince = moment.duration(now.diff(lastUpdated))
  const minutes = duartionSince.asMinutes()
  return minutes <= 15
}

export const lastUpdatedSinceText = (lastUpdated: Date): string => {
  return moment(lastUpdated).fromNow()
}

export const getStatus = (
  valveClosed: boolean | null,
  pumpOn: boolean | null
): string => {
  if (valveClosed === null || pumpOn === null) return 'Loading...'
  if (valveClosed && pumpOn) return 'Filling flood tray'
  if (valveClosed && !pumpOn) return 'Flooding'
  if (!valveClosed && pumpOn) return 'Filling. Max level reached'
  return 'Draining'
}

export const emptyDeviceInfo = (deviceId = '-') => ({
  id: deviceId,
  name: 'Loading',
  data: {
    temp: null,
    hum: null,
    lastUpdated: null,
    isOnline: false,
    lastUpdatedSince: null,
    pumpOn: null,
    valveClose: null,
    ledOn: null,
    fanOn: null,
  },

  settings: {
    red: null,
    green: null,
    blue: null,
    ledOnTime: null,
    ledOffTime: null,
    fanInterval: null,
  },
})

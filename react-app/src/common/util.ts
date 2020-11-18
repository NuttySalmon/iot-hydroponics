import moment from 'moment'
import {
  GraphQLDataType,
  GraphQLDeviceType,
  GraphQLSettingsType,
} from '../Dashboard/UserData'
import { DeviceData, DeviceInfo, DeviceSettings } from '../Dashboard/DeviceInfo'

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
  if (valveClosed === null || pumpOn === null) return 'Not connected'
  if (valveClosed && pumpOn) return 'Filling flood tray'
  if (valveClosed && !pumpOn) return 'Flooding'
  if (!valveClosed && pumpOn) return 'Filling. Max level reached'
  return 'Draining'
}
export function convertToTimeStr(hr: number | null, noSpace = false): string {
  const space = noSpace ? '' : ' '
  if (hr === null) return '-'
  if (hr === 0) return `12${space}am`
  if (hr === 12) return `12${space}pm`
  if (hr < 12) return `${hr}${space}am`
  return `${hr - 12}${space}pm`
}

export function emptyDeviceInfo(deviceId = '-') {
  return {
    id: deviceId,
    name: 'Loading',
    data: {
      temp: null,
      hum: null,
      lastUpdated: null,
      isOnline: false,
      lastUpdatedSince: null,
      pumpOn: null,
      valveClosed: null,
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
      fanDuration: null,
      floodFreq: null,
      floodDuration: null,
    },
  }
}

export function calcDur(begin: number, end: number): number {
  if (begin > end) end += 24
  return end - begin
}

export function getHourMinFromDuration(
  min: number | null,
  unit: 'minute' | 'seconds' = 'minute'
) {
  if (min === null) return '-'
  return moment
    .utc(moment.duration(min, unit).asMilliseconds())
    .format('H [hr] m [min]')
}

const makeDeviceSettingsFromQuery = (
  data: GraphQLSettingsType
): DeviceSettings => {
  const settings: DeviceSettings = data
  return settings
}

const updateLastUpdatedFields = (datetime: string) => {
  const lastUpdated = new Date(datetime)
  return {
    lastUpdated,
    isOnline: calcIsOnline(lastUpdated),
    lastUpdatedSince: lastUpdatedSinceText(lastUpdated),
  }
}
const makeDeviceDataFromQuery = (data: GraphQLDataType): DeviceData => {
  const { fanOn, ledOn, temp, hum, pumpOn, valveClosed, updatedAt } = data
  return {
    temp,
    hum,
    pumpOn,
    valveClosed,
    ledOn,
    fanOn,
    ...updateLastUpdatedFields(updatedAt),
  }
}
export const makeDeviceInfoFromQuery = (device: GraphQLDeviceType): DeviceInfo => {
  const { id, name, currentData, currentSetting } = device
  return {
    id,
    name,
    data: currentData ? makeDeviceDataFromQuery(currentData) : null,
    settings: currentSetting
      ? makeDeviceSettingsFromQuery(currentSetting)
      : null,
  }
}

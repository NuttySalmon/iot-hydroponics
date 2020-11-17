export type DeviceInfo = {
  id: string
  name: string
  data: DeviceData | null
  settings: DeviceSettings | null
}

export type DeviceData = {
  temp: number
  hum: number
  lastUpdated: Date
  isOnline: boolean
  lastUpdatedSince: string
  pumpOn: boolean
  valveClosed: boolean
  ledOn: boolean
  fanOn: boolean
}

export type DeviceSettings = {
  red: number
  green: number
  blue: number
  ledOnTime: number
  ledOffTime: number
  fanInterval: number
  fanDuration: number
  floodFreq: number
  floodDuration: number
}

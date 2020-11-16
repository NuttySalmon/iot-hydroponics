export type DeviceInfo = {
  id: string
  name: string
  data: DeviceData
  settings: DeviceSettings
}

export type DeviceData = {
  temp: number | null
  hum: number | null
  lastUpdated: Date | null
  isOnline: boolean
  lastUpdatedSince: string | null
  pumpOn: boolean | null
  valveClose: boolean | null
  ledOn: boolean | null
  fanOn: boolean | null
}

export type DeviceSettings = {
  red: number | null
  green: number | null
  blue: number | null
  ledOnTime: number | null
  ledOffTime: number | null
  fanInterval: number | null
  fanDuration: number | null
  floodFreq: number | null
  floodDuration: number | null
}

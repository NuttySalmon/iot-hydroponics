export type DeviceInfo = {
  id: string
  name: string
  data: DeviceData
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

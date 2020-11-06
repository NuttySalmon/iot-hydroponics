export type DeviceInfo = {
  id: string
  name: string
  data: DeviceData
}

export type DeviceData = {
  temp: number
  hum: number
  lastUpdated: Date
  status: string
  isOnline: boolean
  lastUpdatedSince: string
}

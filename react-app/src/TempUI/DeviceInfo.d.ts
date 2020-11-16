export type DeviceInfo = {
  id: string
  name: string
  data: DeviceData
}

export type DeviceData = {
  temp: number | null
  hum: number | null
  lastUpdated: Date | null
  // status: string
  isOnline: boolean
  lastUpdatedSince: string | null
  pumpOn: boolean | null
  valveClosed: boolean | null
}

export type DeviceSettings = {}

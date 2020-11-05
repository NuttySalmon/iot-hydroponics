export type DeviceInfo = {
  id: string
  name: string
  data: {
    temp: number
    hum: number
    lastUpdated: Date
    status: string
    isOnline: boolean
    lastUpdatedSince: string
  }
}

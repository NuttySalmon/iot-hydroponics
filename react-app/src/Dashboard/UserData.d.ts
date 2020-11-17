import { UserByCognitoIdQuery } from '../API'
import { DeviceInfo } from '../DeviceInfo'
export type GraphQLUserDataType = UserByCognitoIdQuery.items[0]
export type GraphQLUserDeviceType = GraphQLUserDataType.devices.items[0]
export type GraphQLUserDeviceDataType = GraphQLUserDeviceType.currentData
export type GraphQLUserDeviceSettingsType = GraphQLUserDataType.currentSetting

export type UserDataType = {
  userId: string
  devices: Array<DeviceInfo>
  createdAt: string
  updatedAt: string
}

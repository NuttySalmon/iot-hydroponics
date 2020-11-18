import { OnUpdateDeviceSubscription } from '../API'
import { DeviceInfo } from '../DeviceInfo'

export type GraphQLUserDataType = UserByCognitoIdQuery.items[0]
export type GraphQLDeviceType = GraphQLUserDataType.devices.items[0]
export type GraphQLDataType = GraphQLUserDeviceType.currentData
export type GraphQLSettingsType = GraphQLUserDataType.currentSetting

export type OnUpdateDeviceType = OnUpdateDeviceSubscription.onUpdateDevice &
  Exclude<null>

export type UserDataType = {
  userId: string
  devices: Array<DeviceInfo>
  createdAt: string
  updatedAt: string
}

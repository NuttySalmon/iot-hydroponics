export type GraphQLUserDataType = {
  __typename: string
  id: string
  owner: string
  devices: {
    __typename: string
    items: Array<any> | null
  } | null
  createdAt: string
  updatedAt: string
} | null

import { DeviceInfo } from "../TempUI/DeviceInfo";

export type userDataType2 = {
  userId: string
  devices:Array<DeviceInfo>
}
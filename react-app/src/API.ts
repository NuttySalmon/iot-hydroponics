/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDeviceInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  owner?: string | null,
  deviceCurrentDataId?: string | null,
  deviceCurrentSettingId?: string | null,
};

export type ModelDeviceConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelDeviceConditionInput | null > | null,
  or?: Array< ModelDeviceConditionInput | null > | null,
  not?: ModelDeviceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateDeviceInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  owner?: string | null,
  deviceCurrentDataId?: string | null,
  deviceCurrentSettingId?: string | null,
};

export type DeleteDeviceInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  owner: string,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  owner?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateDataInput = {
  id?: string | null,
  fanOn: boolean,
  LEDOn: boolean,
  temp: number,
  hum: number,
  pumpOn: boolean,
  valveOpen: boolean,
};

export type ModelDataConditionInput = {
  fanOn?: ModelBooleanInput | null,
  LEDOn?: ModelBooleanInput | null,
  temp?: ModelFloatInput | null,
  hum?: ModelFloatInput | null,
  pumpOn?: ModelBooleanInput | null,
  valveOpen?: ModelBooleanInput | null,
  and?: Array< ModelDataConditionInput | null > | null,
  or?: Array< ModelDataConditionInput | null > | null,
  not?: ModelDataConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateDataInput = {
  id: string,
  fanOn?: boolean | null,
  LEDOn?: boolean | null,
  temp?: number | null,
  hum?: number | null,
  pumpOn?: boolean | null,
  valveOpen?: boolean | null,
};

export type DeleteDataInput = {
  id?: string | null,
};

export type CreateSettingInput = {
  id?: string | null,
  waterLevel: number,
  floodFreq: number,
  floodDuration: number,
  LEDOnTime: number,
  LEDOffTime: number,
  fanDuration: number,
  fanInterval: number,
  red: number,
  green: number,
  blue: number,
};

export type ModelSettingConditionInput = {
  waterLevel?: ModelIntInput | null,
  floodFreq?: ModelIntInput | null,
  floodDuration?: ModelIntInput | null,
  LEDOnTime?: ModelIntInput | null,
  LEDOffTime?: ModelIntInput | null,
  fanDuration?: ModelIntInput | null,
  fanInterval?: ModelIntInput | null,
  red?: ModelIntInput | null,
  green?: ModelIntInput | null,
  blue?: ModelIntInput | null,
  and?: Array< ModelSettingConditionInput | null > | null,
  or?: Array< ModelSettingConditionInput | null > | null,
  not?: ModelSettingConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSettingInput = {
  id: string,
  waterLevel?: number | null,
  floodFreq?: number | null,
  floodDuration?: number | null,
  LEDOnTime?: number | null,
  LEDOffTime?: number | null,
  fanDuration?: number | null,
  fanInterval?: number | null,
  red?: number | null,
  green?: number | null,
  blue?: number | null,
};

export type DeleteSettingInput = {
  id?: string | null,
};

export type CreateHistoryInput = {
  id?: string | null,
  deviceID: string,
  datetime: string,
  historyDataId?: string | null,
  historySettingId?: string | null,
};

export type ModelHistoryConditionInput = {
  deviceID?: ModelIDInput | null,
  datetime?: ModelStringInput | null,
  and?: Array< ModelHistoryConditionInput | null > | null,
  or?: Array< ModelHistoryConditionInput | null > | null,
  not?: ModelHistoryConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateHistoryInput = {
  id: string,
  deviceID?: string | null,
  datetime?: string | null,
  historyDataId?: string | null,
  historySettingId?: string | null,
};

export type DeleteHistoryInput = {
  id?: string | null,
};

export type ModelDeviceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelDeviceFilterInput | null > | null,
  or?: Array< ModelDeviceFilterInput | null > | null,
  not?: ModelDeviceFilterInput | null,
};

export type ModelUserFilterInput = {
  owner?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelDataFilterInput = {
  id?: ModelIDInput | null,
  fanOn?: ModelBooleanInput | null,
  LEDOn?: ModelBooleanInput | null,
  temp?: ModelFloatInput | null,
  hum?: ModelFloatInput | null,
  pumpOn?: ModelBooleanInput | null,
  valveOpen?: ModelBooleanInput | null,
  and?: Array< ModelDataFilterInput | null > | null,
  or?: Array< ModelDataFilterInput | null > | null,
  not?: ModelDataFilterInput | null,
};

export type ModelSettingFilterInput = {
  id?: ModelIDInput | null,
  waterLevel?: ModelIntInput | null,
  floodFreq?: ModelIntInput | null,
  floodDuration?: ModelIntInput | null,
  LEDOnTime?: ModelIntInput | null,
  LEDOffTime?: ModelIntInput | null,
  fanDuration?: ModelIntInput | null,
  fanInterval?: ModelIntInput | null,
  red?: ModelIntInput | null,
  green?: ModelIntInput | null,
  blue?: ModelIntInput | null,
  and?: Array< ModelSettingFilterInput | null > | null,
  or?: Array< ModelSettingFilterInput | null > | null,
  not?: ModelSettingFilterInput | null,
};

export type ModelHistoryFilterInput = {
  id?: ModelIDInput | null,
  deviceID?: ModelIDInput | null,
  datetime?: ModelStringInput | null,
  and?: Array< ModelHistoryFilterInput | null > | null,
  or?: Array< ModelHistoryFilterInput | null > | null,
  not?: ModelHistoryFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateDeviceMutationVariables = {
  input: CreateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type CreateDeviceMutation = {
  createDevice:  {
    __typename: "Device",
    id: string,
    name: string,
    description: string | null,
    currentData:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    currentSetting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
    histories:  {
      __typename: "ModelHistoryConnection",
      items:  Array< {
        __typename: "History",
        id: string,
        deviceID: string,
        datetime: string,
        data:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        setting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDeviceMutationVariables = {
  input: UpdateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type UpdateDeviceMutation = {
  updateDevice:  {
    __typename: "Device",
    id: string,
    name: string,
    description: string | null,
    currentData:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    currentSetting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
    histories:  {
      __typename: "ModelHistoryConnection",
      items:  Array< {
        __typename: "History",
        id: string,
        deviceID: string,
        datetime: string,
        data:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        setting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDeviceMutationVariables = {
  input: DeleteDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type DeleteDeviceMutation = {
  deleteDevice:  {
    __typename: "Device",
    id: string,
    name: string,
    description: string | null,
    currentData:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    currentSetting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
    histories:  {
      __typename: "ModelHistoryConnection",
      items:  Array< {
        __typename: "History",
        id: string,
        deviceID: string,
        datetime: string,
        data:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        setting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    owner: string,
    devices:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        name: string,
        description: string | null,
        currentData:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        currentSetting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        owner: string | null,
        histories:  {
          __typename: "ModelHistoryConnection",
          items:  Array< {
            __typename: "History",
            id: string,
            deviceID: string,
            datetime: string,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null > | null,
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    owner: string,
    devices:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        name: string,
        description: string | null,
        currentData:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        currentSetting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        owner: string | null,
        histories:  {
          __typename: "ModelHistoryConnection",
          items:  Array< {
            __typename: "History",
            id: string,
            deviceID: string,
            datetime: string,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null > | null,
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    owner: string,
    devices:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        name: string,
        description: string | null,
        currentData:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        currentSetting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        owner: string | null,
        histories:  {
          __typename: "ModelHistoryConnection",
          items:  Array< {
            __typename: "History",
            id: string,
            deviceID: string,
            datetime: string,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null > | null,
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDataMutationVariables = {
  input: CreateDataInput,
  condition?: ModelDataConditionInput | null,
};

export type CreateDataMutation = {
  createData:  {
    __typename: "Data",
    id: string,
    fanOn: boolean,
    LEDOn: boolean,
    temp: number,
    hum: number,
    pumpOn: boolean,
    valveOpen: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateDataMutationVariables = {
  input: UpdateDataInput,
  condition?: ModelDataConditionInput | null,
};

export type UpdateDataMutation = {
  updateData:  {
    __typename: "Data",
    id: string,
    fanOn: boolean,
    LEDOn: boolean,
    temp: number,
    hum: number,
    pumpOn: boolean,
    valveOpen: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteDataMutationVariables = {
  input: DeleteDataInput,
  condition?: ModelDataConditionInput | null,
};

export type DeleteDataMutation = {
  deleteData:  {
    __typename: "Data",
    id: string,
    fanOn: boolean,
    LEDOn: boolean,
    temp: number,
    hum: number,
    pumpOn: boolean,
    valveOpen: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateSettingMutationVariables = {
  input: CreateSettingInput,
  condition?: ModelSettingConditionInput | null,
};

export type CreateSettingMutation = {
  createSetting:  {
    __typename: "Setting",
    id: string,
    waterLevel: number,
    floodFreq: number,
    floodDuration: number,
    LEDOnTime: number,
    LEDOffTime: number,
    fanDuration: number,
    fanInterval: number,
    red: number,
    green: number,
    blue: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateSettingMutationVariables = {
  input: UpdateSettingInput,
  condition?: ModelSettingConditionInput | null,
};

export type UpdateSettingMutation = {
  updateSetting:  {
    __typename: "Setting",
    id: string,
    waterLevel: number,
    floodFreq: number,
    floodDuration: number,
    LEDOnTime: number,
    LEDOffTime: number,
    fanDuration: number,
    fanInterval: number,
    red: number,
    green: number,
    blue: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteSettingMutationVariables = {
  input: DeleteSettingInput,
  condition?: ModelSettingConditionInput | null,
};

export type DeleteSettingMutation = {
  deleteSetting:  {
    __typename: "Setting",
    id: string,
    waterLevel: number,
    floodFreq: number,
    floodDuration: number,
    LEDOnTime: number,
    LEDOffTime: number,
    fanDuration: number,
    fanInterval: number,
    red: number,
    green: number,
    blue: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateHistoryMutationVariables = {
  input: CreateHistoryInput,
  condition?: ModelHistoryConditionInput | null,
};

export type CreateHistoryMutation = {
  createHistory:  {
    __typename: "History",
    id: string,
    deviceID: string,
    datetime: string,
    data:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    setting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateHistoryMutationVariables = {
  input: UpdateHistoryInput,
  condition?: ModelHistoryConditionInput | null,
};

export type UpdateHistoryMutation = {
  updateHistory:  {
    __typename: "History",
    id: string,
    deviceID: string,
    datetime: string,
    data:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    setting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteHistoryMutationVariables = {
  input: DeleteHistoryInput,
  condition?: ModelHistoryConditionInput | null,
};

export type DeleteHistoryMutation = {
  deleteHistory:  {
    __typename: "History",
    id: string,
    deviceID: string,
    datetime: string,
    data:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    setting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetDeviceQueryVariables = {
  id: string,
};

export type GetDeviceQuery = {
  getDevice:  {
    __typename: "Device",
    id: string,
    name: string,
    description: string | null,
    currentData:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    currentSetting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
    histories:  {
      __typename: "ModelHistoryConnection",
      items:  Array< {
        __typename: "History",
        id: string,
        deviceID: string,
        datetime: string,
        data:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        setting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDevicesQueryVariables = {
  filter?: ModelDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDevicesQuery = {
  listDevices:  {
    __typename: "ModelDeviceConnection",
    items:  Array< {
      __typename: "Device",
      id: string,
      name: string,
      description: string | null,
      currentData:  {
        __typename: "Data",
        id: string,
        fanOn: boolean,
        LEDOn: boolean,
        temp: number,
        hum: number,
        pumpOn: boolean,
        valveOpen: boolean,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      currentSetting:  {
        __typename: "Setting",
        id: string,
        waterLevel: number,
        floodFreq: number,
        floodDuration: number,
        LEDOnTime: number,
        LEDOffTime: number,
        fanDuration: number,
        fanInterval: number,
        red: number,
        green: number,
        blue: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      histories:  {
        __typename: "ModelHistoryConnection",
        items:  Array< {
          __typename: "History",
          id: string,
          deviceID: string,
          datetime: string,
          data:  {
            __typename: "Data",
            id: string,
            fanOn: boolean,
            LEDOn: boolean,
            temp: number,
            hum: number,
            pumpOn: boolean,
            valveOpen: boolean,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null,
          setting:  {
            __typename: "Setting",
            id: string,
            waterLevel: number,
            floodFreq: number,
            floodDuration: number,
            LEDOnTime: number,
            LEDOffTime: number,
            fanDuration: number,
            fanInterval: number,
            red: number,
            green: number,
            blue: number,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    owner: string,
    devices:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        name: string,
        description: string | null,
        currentData:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        currentSetting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        owner: string | null,
        histories:  {
          __typename: "ModelHistoryConnection",
          items:  Array< {
            __typename: "History",
            id: string,
            deviceID: string,
            datetime: string,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null > | null,
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      owner: string,
      devices:  {
        __typename: "ModelDeviceConnection",
        items:  Array< {
          __typename: "Device",
          id: string,
          name: string,
          description: string | null,
          currentData:  {
            __typename: "Data",
            id: string,
            fanOn: boolean,
            LEDOn: boolean,
            temp: number,
            hum: number,
            pumpOn: boolean,
            valveOpen: boolean,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null,
          currentSetting:  {
            __typename: "Setting",
            id: string,
            waterLevel: number,
            floodFreq: number,
            floodDuration: number,
            LEDOnTime: number,
            LEDOffTime: number,
            fanDuration: number,
            fanInterval: number,
            red: number,
            green: number,
            blue: number,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null,
          owner: string | null,
          histories:  {
            __typename: "ModelHistoryConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetDataQueryVariables = {
  id: string,
};

export type GetDataQuery = {
  getData:  {
    __typename: "Data",
    id: string,
    fanOn: boolean,
    LEDOn: boolean,
    temp: number,
    hum: number,
    pumpOn: boolean,
    valveOpen: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListDatasQueryVariables = {
  filter?: ModelDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDatasQuery = {
  listDatas:  {
    __typename: "ModelDataConnection",
    items:  Array< {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSettingQueryVariables = {
  id: string,
};

export type GetSettingQuery = {
  getSetting:  {
    __typename: "Setting",
    id: string,
    waterLevel: number,
    floodFreq: number,
    floodDuration: number,
    LEDOnTime: number,
    LEDOffTime: number,
    fanDuration: number,
    fanInterval: number,
    red: number,
    green: number,
    blue: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListSettingsQueryVariables = {
  filter?: ModelSettingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSettingsQuery = {
  listSettings:  {
    __typename: "ModelSettingConnection",
    items:  Array< {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetHistoryQueryVariables = {
  id: string,
};

export type GetHistoryQuery = {
  getHistory:  {
    __typename: "History",
    id: string,
    deviceID: string,
    datetime: string,
    data:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    setting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListHistorysQueryVariables = {
  filter?: ModelHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHistorysQuery = {
  listHistorys:  {
    __typename: "ModelHistoryConnection",
    items:  Array< {
      __typename: "History",
      id: string,
      deviceID: string,
      datetime: string,
      data:  {
        __typename: "Data",
        id: string,
        fanOn: boolean,
        LEDOn: boolean,
        temp: number,
        hum: number,
        pumpOn: boolean,
        valveOpen: boolean,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      setting:  {
        __typename: "Setting",
        id: string,
        waterLevel: number,
        floodFreq: number,
        floodDuration: number,
        LEDOnTime: number,
        LEDOffTime: number,
        fanDuration: number,
        fanInterval: number,
        red: number,
        green: number,
        blue: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type UserByCognitoIdQueryVariables = {
  owner?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByCognitoIdQuery = {
  userByCognitoID:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      owner: string,
      devices:  {
        __typename: "ModelDeviceConnection",
        items:  Array< {
          __typename: "Device",
          id: string,
          name: string,
          description: string | null,
          currentData:  {
            __typename: "Data",
            id: string,
            fanOn: boolean,
            LEDOn: boolean,
            temp: number,
            hum: number,
            pumpOn: boolean,
            valveOpen: boolean,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null,
          currentSetting:  {
            __typename: "Setting",
            id: string,
            waterLevel: number,
            floodFreq: number,
            floodDuration: number,
            LEDOnTime: number,
            LEDOffTime: number,
            fanDuration: number,
            fanInterval: number,
            red: number,
            green: number,
            blue: number,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null,
          owner: string | null,
          histories:  {
            __typename: "ModelHistoryConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateDeviceSubscriptionVariables = {
  owner: string,
};

export type OnCreateDeviceSubscription = {
  onCreateDevice:  {
    __typename: "Device",
    id: string,
    name: string,
    description: string | null,
    currentData:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    currentSetting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
    histories:  {
      __typename: "ModelHistoryConnection",
      items:  Array< {
        __typename: "History",
        id: string,
        deviceID: string,
        datetime: string,
        data:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        setting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDeviceSubscriptionVariables = {
  owner: string,
};

export type OnUpdateDeviceSubscription = {
  onUpdateDevice:  {
    __typename: "Device",
    id: string,
    name: string,
    description: string | null,
    currentData:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    currentSetting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
    histories:  {
      __typename: "ModelHistoryConnection",
      items:  Array< {
        __typename: "History",
        id: string,
        deviceID: string,
        datetime: string,
        data:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        setting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDeviceSubscriptionVariables = {
  owner: string,
};

export type OnDeleteDeviceSubscription = {
  onDeleteDevice:  {
    __typename: "Device",
    id: string,
    name: string,
    description: string | null,
    currentData:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    currentSetting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
    histories:  {
      __typename: "ModelHistoryConnection",
      items:  Array< {
        __typename: "History",
        id: string,
        deviceID: string,
        datetime: string,
        data:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        setting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    owner: string,
    devices:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        name: string,
        description: string | null,
        currentData:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        currentSetting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        owner: string | null,
        histories:  {
          __typename: "ModelHistoryConnection",
          items:  Array< {
            __typename: "History",
            id: string,
            deviceID: string,
            datetime: string,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null > | null,
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    owner: string,
    devices:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        name: string,
        description: string | null,
        currentData:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        currentSetting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        owner: string | null,
        histories:  {
          __typename: "ModelHistoryConnection",
          items:  Array< {
            __typename: "History",
            id: string,
            deviceID: string,
            datetime: string,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null > | null,
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    owner: string,
    devices:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        name: string,
        description: string | null,
        currentData:  {
          __typename: "Data",
          id: string,
          fanOn: boolean,
          LEDOn: boolean,
          temp: number,
          hum: number,
          pumpOn: boolean,
          valveOpen: boolean,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        currentSetting:  {
          __typename: "Setting",
          id: string,
          waterLevel: number,
          floodFreq: number,
          floodDuration: number,
          LEDOnTime: number,
          LEDOffTime: number,
          fanDuration: number,
          fanInterval: number,
          red: number,
          green: number,
          blue: number,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null,
        owner: string | null,
        histories:  {
          __typename: "ModelHistoryConnection",
          items:  Array< {
            __typename: "History",
            id: string,
            deviceID: string,
            datetime: string,
            createdAt: string,
            updatedAt: string,
            owner: string | null,
          } | null > | null,
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDataSubscriptionVariables = {
  owner: string,
};

export type OnCreateDataSubscription = {
  onCreateData:  {
    __typename: "Data",
    id: string,
    fanOn: boolean,
    LEDOn: boolean,
    temp: number,
    hum: number,
    pumpOn: boolean,
    valveOpen: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateDataSubscriptionVariables = {
  owner: string,
};

export type OnUpdateDataSubscription = {
  onUpdateData:  {
    __typename: "Data",
    id: string,
    fanOn: boolean,
    LEDOn: boolean,
    temp: number,
    hum: number,
    pumpOn: boolean,
    valveOpen: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteDataSubscriptionVariables = {
  owner: string,
};

export type OnDeleteDataSubscription = {
  onDeleteData:  {
    __typename: "Data",
    id: string,
    fanOn: boolean,
    LEDOn: boolean,
    temp: number,
    hum: number,
    pumpOn: boolean,
    valveOpen: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateSettingSubscriptionVariables = {
  owner: string,
};

export type OnCreateSettingSubscription = {
  onCreateSetting:  {
    __typename: "Setting",
    id: string,
    waterLevel: number,
    floodFreq: number,
    floodDuration: number,
    LEDOnTime: number,
    LEDOffTime: number,
    fanDuration: number,
    fanInterval: number,
    red: number,
    green: number,
    blue: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateSettingSubscriptionVariables = {
  owner: string,
};

export type OnUpdateSettingSubscription = {
  onUpdateSetting:  {
    __typename: "Setting",
    id: string,
    waterLevel: number,
    floodFreq: number,
    floodDuration: number,
    LEDOnTime: number,
    LEDOffTime: number,
    fanDuration: number,
    fanInterval: number,
    red: number,
    green: number,
    blue: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteSettingSubscriptionVariables = {
  owner: string,
};

export type OnDeleteSettingSubscription = {
  onDeleteSetting:  {
    __typename: "Setting",
    id: string,
    waterLevel: number,
    floodFreq: number,
    floodDuration: number,
    LEDOnTime: number,
    LEDOffTime: number,
    fanDuration: number,
    fanInterval: number,
    red: number,
    green: number,
    blue: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateHistorySubscriptionVariables = {
  owner: string,
};

export type OnCreateHistorySubscription = {
  onCreateHistory:  {
    __typename: "History",
    id: string,
    deviceID: string,
    datetime: string,
    data:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    setting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateHistorySubscriptionVariables = {
  owner: string,
};

export type OnUpdateHistorySubscription = {
  onUpdateHistory:  {
    __typename: "History",
    id: string,
    deviceID: string,
    datetime: string,
    data:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    setting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteHistorySubscriptionVariables = {
  owner: string,
};

export type OnDeleteHistorySubscription = {
  onDeleteHistory:  {
    __typename: "History",
    id: string,
    deviceID: string,
    datetime: string,
    data:  {
      __typename: "Data",
      id: string,
      fanOn: boolean,
      LEDOn: boolean,
      temp: number,
      hum: number,
      pumpOn: boolean,
      valveOpen: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    setting:  {
      __typename: "Setting",
      id: string,
      waterLevel: number,
      floodFreq: number,
      floodDuration: number,
      LEDOnTime: number,
      LEDOffTime: number,
      fanDuration: number,
      fanInterval: number,
      red: number,
      green: number,
      blue: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

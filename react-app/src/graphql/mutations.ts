/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      name
      description
      currentData {
        id
        time
        fanOn
        LEDOn
        temp
        hum
        pumpOn
        valveOpen
        createdAt
        updatedAt
        owner
      }
      currentSetting {
        id
        waterLevel
        floodFrequency
        LEDOnTime
        LEDOffTime
        FanDuration
        red
        green
        blue
        createdAt
        updatedAt
        owner
      }
      histories {
        items {
          id
          deviceID
          datetime
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      name
      description
      currentData {
        id
        time
        fanOn
        LEDOn
        temp
        hum
        pumpOn
        valveOpen
        createdAt
        updatedAt
        owner
      }
      currentSetting {
        id
        waterLevel
        floodFrequency
        LEDOnTime
        LEDOffTime
        FanDuration
        red
        green
        blue
        createdAt
        updatedAt
        owner
      }
      histories {
        items {
          id
          deviceID
          datetime
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      name
      description
      currentData {
        id
        time
        fanOn
        LEDOn
        temp
        hum
        pumpOn
        valveOpen
        createdAt
        updatedAt
        owner
      }
      currentSetting {
        id
        waterLevel
        floodFrequency
        LEDOnTime
        LEDOffTime
        FanDuration
        red
        green
        blue
        createdAt
        updatedAt
        owner
      }
      histories {
        items {
          id
          deviceID
          datetime
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createData = /* GraphQL */ `
  mutation CreateData(
    $input: CreateDataInput!
    $condition: ModelDataConditionInput
  ) {
    createData(input: $input, condition: $condition) {
      id
      time
      fanOn
      LEDOn
      temp
      hum
      pumpOn
      valveOpen
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateData = /* GraphQL */ `
  mutation UpdateData(
    $input: UpdateDataInput!
    $condition: ModelDataConditionInput
  ) {
    updateData(input: $input, condition: $condition) {
      id
      time
      fanOn
      LEDOn
      temp
      hum
      pumpOn
      valveOpen
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteData = /* GraphQL */ `
  mutation DeleteData(
    $input: DeleteDataInput!
    $condition: ModelDataConditionInput
  ) {
    deleteData(input: $input, condition: $condition) {
      id
      time
      fanOn
      LEDOn
      temp
      hum
      pumpOn
      valveOpen
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSetting = /* GraphQL */ `
  mutation CreateSetting(
    $input: CreateSettingInput!
    $condition: ModelSettingConditionInput
  ) {
    createSetting(input: $input, condition: $condition) {
      id
      waterLevel
      floodFrequency
      LEDOnTime
      LEDOffTime
      FanDuration
      red
      green
      blue
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSetting = /* GraphQL */ `
  mutation UpdateSetting(
    $input: UpdateSettingInput!
    $condition: ModelSettingConditionInput
  ) {
    updateSetting(input: $input, condition: $condition) {
      id
      waterLevel
      floodFrequency
      LEDOnTime
      LEDOffTime
      FanDuration
      red
      green
      blue
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSetting = /* GraphQL */ `
  mutation DeleteSetting(
    $input: DeleteSettingInput!
    $condition: ModelSettingConditionInput
  ) {
    deleteSetting(input: $input, condition: $condition) {
      id
      waterLevel
      floodFrequency
      LEDOnTime
      LEDOffTime
      FanDuration
      red
      green
      blue
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createHistory = /* GraphQL */ `
  mutation CreateHistory(
    $input: CreateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    createHistory(input: $input, condition: $condition) {
      id
      deviceID
      datetime
      data {
        id
        time
        fanOn
        LEDOn
        temp
        hum
        pumpOn
        valveOpen
        createdAt
        updatedAt
        owner
      }
      setting {
        id
        waterLevel
        floodFrequency
        LEDOnTime
        LEDOffTime
        FanDuration
        red
        green
        blue
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateHistory = /* GraphQL */ `
  mutation UpdateHistory(
    $input: UpdateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    updateHistory(input: $input, condition: $condition) {
      id
      deviceID
      datetime
      data {
        id
        time
        fanOn
        LEDOn
        temp
        hum
        pumpOn
        valveOpen
        createdAt
        updatedAt
        owner
      }
      setting {
        id
        waterLevel
        floodFrequency
        LEDOnTime
        LEDOffTime
        FanDuration
        red
        green
        blue
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteHistory = /* GraphQL */ `
  mutation DeleteHistory(
    $input: DeleteHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    deleteHistory(input: $input, condition: $condition) {
      id
      deviceID
      datetime
      data {
        id
        time
        fanOn
        LEDOn
        temp
        hum
        pumpOn
        valveOpen
        createdAt
        updatedAt
        owner
      }
      setting {
        id
        waterLevel
        floodFrequency
        LEDOnTime
        LEDOffTime
        FanDuration
        red
        green
        blue
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;

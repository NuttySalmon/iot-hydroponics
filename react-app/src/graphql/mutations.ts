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
      owner
      createdAt
      updatedAt
      currentData {
        id
        fanOn
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        owner
        createdAt
        updatedAt
      }
      currentSetting {
        id
        floodFreq
        floodDuration
        ledOnTime
        ledOffTime
        fanDuration
        fanInterval
        red
        green
        blue
        owner
        createdAt
        updatedAt
      }
      histories {
        items {
          id
          deviceID
          datetime
          owner
          createdAt
          updatedAt
          data {
            id
            fanOn
            ledOn
            temp
            hum
            pumpOn
            valveClosed
            owner
            createdAt
            updatedAt
          }
          setting {
            id
            floodFreq
            floodDuration
            ledOnTime
            ledOffTime
            fanDuration
            fanInterval
            red
            green
            blue
            owner
            createdAt
            updatedAt
          }
        }
        nextToken
      }
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
      owner
      createdAt
      updatedAt
      currentData {
        id
        fanOn
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        owner
        createdAt
        updatedAt
      }
      currentSetting {
        id
        floodFreq
        floodDuration
        ledOnTime
        ledOffTime
        fanDuration
        fanInterval
        red
        green
        blue
        owner
        createdAt
        updatedAt
      }
      histories {
        items {
          id
          deviceID
          datetime
          owner
          createdAt
          updatedAt
          data {
            id
            fanOn
            ledOn
            temp
            hum
            pumpOn
            valveClosed
            owner
            createdAt
            updatedAt
          }
          setting {
            id
            floodFreq
            floodDuration
            ledOnTime
            ledOffTime
            fanDuration
            fanInterval
            red
            green
            blue
            owner
            createdAt
            updatedAt
          }
        }
        nextToken
      }
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
      owner
      createdAt
      updatedAt
      currentData {
        id
        fanOn
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        owner
        createdAt
        updatedAt
      }
      currentSetting {
        id
        floodFreq
        floodDuration
        ledOnTime
        ledOffTime
        fanDuration
        fanInterval
        red
        green
        blue
        owner
        createdAt
        updatedAt
      }
      histories {
        items {
          id
          deviceID
          datetime
          owner
          createdAt
          updatedAt
          data {
            id
            fanOn
            ledOn
            temp
            hum
            pumpOn
            valveClosed
            owner
            createdAt
            updatedAt
          }
          setting {
            id
            floodFreq
            floodDuration
            ledOnTime
            ledOffTime
            fanDuration
            fanInterval
            red
            green
            blue
            owner
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      owner
      id
      createdAt
      updatedAt
      devices {
        items {
          id
          name
          description
          owner
          createdAt
          updatedAt
          currentData {
            id
            fanOn
            ledOn
            temp
            hum
            pumpOn
            valveClosed
            owner
            createdAt
            updatedAt
          }
          currentSetting {
            id
            floodFreq
            floodDuration
            ledOnTime
            ledOffTime
            fanDuration
            fanInterval
            red
            green
            blue
            owner
            createdAt
            updatedAt
          }
          histories {
            items {
              id
              deviceID
              datetime
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      owner
      id
      createdAt
      updatedAt
      devices {
        items {
          id
          name
          description
          owner
          createdAt
          updatedAt
          currentData {
            id
            fanOn
            ledOn
            temp
            hum
            pumpOn
            valveClosed
            owner
            createdAt
            updatedAt
          }
          currentSetting {
            id
            floodFreq
            floodDuration
            ledOnTime
            ledOffTime
            fanDuration
            fanInterval
            red
            green
            blue
            owner
            createdAt
            updatedAt
          }
          histories {
            items {
              id
              deviceID
              datetime
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      owner
      id
      createdAt
      updatedAt
      devices {
        items {
          id
          name
          description
          owner
          createdAt
          updatedAt
          currentData {
            id
            fanOn
            ledOn
            temp
            hum
            pumpOn
            valveClosed
            owner
            createdAt
            updatedAt
          }
          currentSetting {
            id
            floodFreq
            floodDuration
            ledOnTime
            ledOffTime
            fanDuration
            fanInterval
            red
            green
            blue
            owner
            createdAt
            updatedAt
          }
          histories {
            items {
              id
              deviceID
              datetime
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
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
      fanOn
      ledOn
      temp
      hum
      pumpOn
      valveClosed
      owner
      createdAt
      updatedAt
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
      fanOn
      ledOn
      temp
      hum
      pumpOn
      valveClosed
      owner
      createdAt
      updatedAt
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
      fanOn
      ledOn
      temp
      hum
      pumpOn
      valveClosed
      owner
      createdAt
      updatedAt
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
      floodFreq
      floodDuration
      ledOnTime
      ledOffTime
      fanDuration
      fanInterval
      red
      green
      blue
      owner
      createdAt
      updatedAt
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
      floodFreq
      floodDuration
      ledOnTime
      ledOffTime
      fanDuration
      fanInterval
      red
      green
      blue
      owner
      createdAt
      updatedAt
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
      floodFreq
      floodDuration
      ledOnTime
      ledOffTime
      fanDuration
      fanInterval
      red
      green
      blue
      owner
      createdAt
      updatedAt
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
      owner
      createdAt
      updatedAt
      data {
        id
        fanOn
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        owner
        createdAt
        updatedAt
      }
      setting {
        id
        floodFreq
        floodDuration
        ledOnTime
        ledOffTime
        fanDuration
        fanInterval
        red
        green
        blue
        owner
        createdAt
        updatedAt
      }
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
      owner
      createdAt
      updatedAt
      data {
        id
        fanOn
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        owner
        createdAt
        updatedAt
      }
      setting {
        id
        floodFreq
        floodDuration
        ledOnTime
        ledOffTime
        fanDuration
        fanInterval
        red
        green
        blue
        owner
        createdAt
        updatedAt
      }
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
      owner
      createdAt
      updatedAt
      data {
        id
        fanOn
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        owner
        createdAt
        updatedAt
      }
      setting {
        id
        floodFreq
        floodDuration
        ledOnTime
        ledOffTime
        fanDuration
        fanInterval
        red
        green
        blue
        owner
        createdAt
        updatedAt
      }
    }
  }
`;

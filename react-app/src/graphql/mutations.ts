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
        fanOn
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        createdAt
        updatedAt
        owner
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
        createdAt
        updatedAt
        owner
      }
      owner
      histories {
        items {
          id
          deviceID
          datetime
          data {
            id
            fanOn
            ledOn
            temp
            hum
            pumpOn
            valveClosed
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
        fanOn
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        createdAt
        updatedAt
        owner
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
        createdAt
        updatedAt
        owner
      }
      owner
      histories {
        items {
          id
          deviceID
          datetime
          data {
            id
            fanOn
            ledOn
            temp
            hum
            pumpOn
            valveClosed
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
        fanOn
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        createdAt
        updatedAt
        owner
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
        createdAt
        updatedAt
        owner
      }
      owner
      histories {
        items {
          id
          deviceID
          datetime
          data {
            id
            fanOn
            ledOn
            temp
            hum
            pumpOn
            valveClosed
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
      devices {
        items {
          id
          name
          description
          currentData {
            id
            fanOn
            ledOn
            temp
            hum
            pumpOn
            valveClosed
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          owner
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
        }
        nextToken
      }
      id
      createdAt
      updatedAt
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
      devices {
        items {
          id
          name
          description
          currentData {
            id
            fanOn
            ledOn
            temp
            hum
            pumpOn
            valveClosed
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          owner
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
        }
        nextToken
      }
      id
      createdAt
      updatedAt
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
      devices {
        items {
          id
          name
          description
          currentData {
            id
            fanOn
            ledOn
            temp
            hum
            pumpOn
            valveClosed
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          owner
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
        }
        nextToken
      }
      id
      createdAt
      updatedAt
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
      fanOn
      ledOn
      temp
      hum
      pumpOn
      valveClosed
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
      fanOn
      ledOn
      temp
      hum
      pumpOn
      valveClosed
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
      floodFreq
      floodDuration
      ledOnTime
      ledOffTime
      fanDuration
      fanInterval
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
      floodFreq
      floodDuration
      ledOnTime
      ledOffTime
      fanDuration
      fanInterval
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
      floodFreq
      floodDuration
      ledOnTime
      ledOffTime
      fanDuration
      fanInterval
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
        fanOn
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        createdAt
        updatedAt
        owner
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
        fanOn
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        createdAt
        updatedAt
        owner
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
        fanOn
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        createdAt
        updatedAt
        owner
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

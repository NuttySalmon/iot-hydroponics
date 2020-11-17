/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice($owner: String!) {
    onCreateDevice(owner: $owner) {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice($owner: String!) {
    onUpdateDevice(owner: $owner) {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice($owner: String!) {
    onDeleteDevice(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateData = /* GraphQL */ `
  subscription OnCreateData($owner: String!) {
    onCreateData(owner: $owner) {
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
export const onUpdateData = /* GraphQL */ `
  subscription OnUpdateData($owner: String!) {
    onUpdateData(owner: $owner) {
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
export const onDeleteData = /* GraphQL */ `
  subscription OnDeleteData($owner: String!) {
    onDeleteData(owner: $owner) {
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
export const onCreateSetting = /* GraphQL */ `
  subscription OnCreateSetting($owner: String!) {
    onCreateSetting(owner: $owner) {
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
export const onUpdateSetting = /* GraphQL */ `
  subscription OnUpdateSetting($owner: String!) {
    onUpdateSetting(owner: $owner) {
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
export const onDeleteSetting = /* GraphQL */ `
  subscription OnDeleteSetting($owner: String!) {
    onDeleteSetting(owner: $owner) {
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
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory($owner: String!) {
    onCreateHistory(owner: $owner) {
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
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory($owner: String!) {
    onUpdateHistory(owner: $owner) {
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
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory($owner: String!) {
    onDeleteHistory(owner: $owner) {
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

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice($owner: String) {
    onCreateDevice(owner: $owner) {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice($owner: String) {
    onUpdateDevice(owner: $owner) {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice($owner: String) {
    onDeleteDevice(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateData = /* GraphQL */ `
  subscription OnCreateData($owner: String) {
    onCreateData(owner: $owner) {
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
export const onUpdateData = /* GraphQL */ `
  subscription OnUpdateData($owner: String) {
    onUpdateData(owner: $owner) {
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
export const onDeleteData = /* GraphQL */ `
  subscription OnDeleteData($owner: String) {
    onDeleteData(owner: $owner) {
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
export const onCreateSetting = /* GraphQL */ `
  subscription OnCreateSetting($owner: String) {
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
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSetting = /* GraphQL */ `
  subscription OnUpdateSetting($owner: String) {
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
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSetting = /* GraphQL */ `
  subscription OnDeleteSetting($owner: String) {
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
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory($owner: String) {
    onCreateHistory(owner: $owner) {
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
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory($owner: String) {
    onUpdateHistory(owner: $owner) {
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
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory($owner: String) {
    onDeleteHistory(owner: $owner) {
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

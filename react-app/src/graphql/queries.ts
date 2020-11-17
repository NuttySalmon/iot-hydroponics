/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
      id
      name
      description
      currentData {
        id
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
        floodFreq
        floodDuration
        LEDOnTime
        LEDOffTime
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
            floodFreq
            floodDuration
            LEDOnTime
            LEDOffTime
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
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        currentData {
          id
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
          floodFreq
          floodDuration
          LEDOnTime
          LEDOffTime
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
              floodFreq
              floodDuration
              LEDOnTime
              LEDOffTime
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
            floodFreq
            floodDuration
            LEDOnTime
            LEDOffTime
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
              floodFreq
              floodDuration
              LEDOnTime
              LEDOffTime
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
      nextToken
    }
  }
`;
export const getData = /* GraphQL */ `
  query GetData($id: ID!) {
    getData(id: $id) {
      id
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
export const listDatas = /* GraphQL */ `
  query ListDatas(
    $filter: ModelDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
      nextToken
    }
  }
`;
export const getSetting = /* GraphQL */ `
  query GetSetting($id: ID!) {
    getSetting(id: $id) {
      id
      waterLevel
      floodFreq
      floodDuration
      LEDOnTime
      LEDOffTime
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
export const listSettings = /* GraphQL */ `
  query ListSettings(
    $filter: ModelSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        waterLevel
        floodFreq
        floodDuration
        LEDOnTime
        LEDOffTime
        fanDuration
        fanInterval
        red
        green
        blue
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
      id
      deviceID
      datetime
      data {
        id
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
        floodFreq
        floodDuration
        LEDOnTime
        LEDOffTime
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
export const listHistorys = /* GraphQL */ `
  query ListHistorys(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deviceID
        datetime
        data {
          id
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
          floodFreq
          floodDuration
          LEDOnTime
          LEDOffTime
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
  }
`;
export const userByCognitoId = /* GraphQL */ `
  query UserByCognitoId(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByCognitoID(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
              floodFreq
              floodDuration
              LEDOnTime
              LEDOffTime
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
      nextToken
    }
  }
`;

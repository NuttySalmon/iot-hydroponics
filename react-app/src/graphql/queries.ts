/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
              nextToken
            }
          }
          nextToken
        }
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
              nextToken
            }
          }
          nextToken
        }
      }
      nextToken
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
        ledOn
        temp
        hum
        pumpOn
        valveClosed
        owner
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
export const listSettings = /* GraphQL */ `
  query ListSettings(
    $filter: ModelSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSetting = /* GraphQL */ `
  query GetSetting($id: ID!) {
    getSetting(id: $id) {
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
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
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
`;

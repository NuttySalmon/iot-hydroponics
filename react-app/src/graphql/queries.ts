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
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getData = /* GraphQL */ `
  query GetData($id: ID!) {
    getData(id: $id) {
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
export const listDatas = /* GraphQL */ `
  query ListDatas(
    $filter: ModelDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSetting = /* GraphQL */ `
  query GetSetting($id: ID!) {
    getSetting(id: $id) {
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
      nextToken
    }
  }
`;

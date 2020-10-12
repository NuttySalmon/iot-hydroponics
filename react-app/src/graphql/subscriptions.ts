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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice($owner: String!) {
    onUpdateDevice(owner: $owner) {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice($owner: String!) {
    onDeleteDevice(owner: $owner) {
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
export const onCreateData = /* GraphQL */ `
  subscription OnCreateData($owner: String!) {
    onCreateData(owner: $owner) {
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
export const onUpdateData = /* GraphQL */ `
  subscription OnUpdateData($owner: String!) {
    onUpdateData(owner: $owner) {
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
export const onDeleteData = /* GraphQL */ `
  subscription OnDeleteData($owner: String!) {
    onDeleteData(owner: $owner) {
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
export const onCreateSetting = /* GraphQL */ `
  subscription OnCreateSetting($owner: String!) {
    onCreateSetting(owner: $owner) {
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
export const onUpdateSetting = /* GraphQL */ `
  subscription OnUpdateSetting($owner: String!) {
    onUpdateSetting(owner: $owner) {
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
export const onDeleteSetting = /* GraphQL */ `
  subscription OnDeleteSetting($owner: String!) {
    onDeleteSetting(owner: $owner) {
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
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory($owner: String!) {
    onCreateHistory(owner: $owner) {
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
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory($owner: String!) {
    onUpdateHistory(owner: $owner) {
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
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory($owner: String!) {
    onDeleteHistory(owner: $owner) {
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

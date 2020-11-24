const axios = require('axios')
const gql = require('graphql-tag')
const graphql = require('graphql')
const { print } = graphql

// need all return fields to trigger GraphQL subscription
const updateDeviceGql = gql`
  mutation updateDevice($input: UpdateDeviceInput!) {
    updateDevice(input: $input) {
      description
      id
      name
      owner
      updatedAt
      createdAt
      currentSetting {
        blue
        createdAt
        fanDuration
        fanInterval
        floodDuration
        floodFreq
        green
        id
        ledOffTime
        ledOnTime
        red
        owner
        updatedAt
      }
      currentData {
        createdAt
        fanOn
        hum
        id
        ledOn
        owner
        pumpOn
        temp
        updatedAt
        valveClosed
      }
    }
  }
`

exports.updateDevice = async (
  deviceId,
  deviceCurrentDataId,
  deviceCurrentSettingId
) => {
  try {
    const graphqlData = await axios({
      url: process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIKEYOUTPUT,
      },
      data: {
        query: print(updateDeviceGql),
        variables: {
          input: { id: deviceId, deviceCurrentDataId, deviceCurrentSettingId },
        },
      },
    })
  } catch (err) {
    console.log('error updating device: ', err)
  }
}

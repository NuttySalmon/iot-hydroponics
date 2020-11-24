const axios = require('axios')
const gql = require('graphql-tag')
const graphql = require('graphql')
const { print } = graphql

const updateDeviceGql = gql `
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

exports.updateDevice = async(deviceId, deviceCurrentDataId, deviceCurrentSettingId ) => {
  // console.log(process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIKEYOUTPUT)
  console.log("device id check", deviceId)
  try {
    const graphqlData = await axios({
      url: process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': "da2-syamaqysa5auvditnzp5ojlphm",
      },
      data: {
        query: print(updateDeviceGql),
        variables: {
          input: {
            id: deviceId,
            deviceCurrentDataId ,
            deviceCurrentSettingId
          },
        },
      },
    })
    const body = {
      myError: graphqlData.error,
      message: 'successfully created todo!',
    }
  }
  catch (err) {
    console.log('error creating todo: ', err)
  }
}

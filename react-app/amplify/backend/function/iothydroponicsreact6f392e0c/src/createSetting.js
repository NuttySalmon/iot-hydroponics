const axios = require('axios')
const gql = require('graphql-tag')
const graphql = require('graphql')
const { print } = graphql

/*
  floodFreq: Int!
  floodDuration: Int!
  ledOnTime: Int!
  ledOffTime: Int!
  fanDuration: Int!
  fanInterval: Int!
  red: Int!
  green: Int!
  blue: Int!
*/

const createSettingsGql = gql `
  mutation createSetting($input: CreateSettingInput!) {
    createSetting(input: $input) {
      id
    }
  }
`

exports.createSetting = async({ floodFreq, floodDuration, ledOnTime, ledOffTime, fanDuration, fanInterval, red, green, blue, owner }) => {
  // console.log(process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIKEYOUTPUT)
  try {
    const graphqlData = await axios({
      url: process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': "da2-syamaqysa5auvditnzp5ojlphm",
      },
      data: {
        query: print(createSettingsGql),
        variables: {
          input: {
            floodFreq,
            floodDuration,
            ledOnTime,
            ledOffTime,
            fanDuration,
            fanInterval,
            red,
            green,
            blue,
            owner
          },
        },
      },
    })
    const body = {
      myError: graphqlData.error,
      message: 'successfully created todo!',
    }
    return graphqlData.data.data.createSetting.id
  }
  catch (err) {
    console.log('error creating todo: ', err)
  }
}

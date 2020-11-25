const axios = require('axios')
const gql = require('graphql-tag')
const graphql = require('graphql')
const { print } = graphql

const createSettingsGql = gql`
  mutation createSetting($input: CreateSettingInput!) {
    createSetting(input: $input) {
      id
    }
  }
`
/**
 * Function to create new entry to setting table
 * @param {object} settings - device settings
 * @param {number} settings.floodFreq - flood frequency in minutes
 * @param {number} settings.floodDuration  - flood duration in minutes
 * @param {number} settings.ledOnTime  - hour of day to turn on LED
 * @param {number} settings.ledOffTime  - hour of day to turn off LED
 * @param {number} settings.fanDuration - duration in minutes for turning on fan each time
 * @param {number} settings.fanintererval - delay in minutes between each time of turning on fan
 * @param {number} settings.red - red LED level in percentage
 * @param {number} settings.green- green LED level in percentage
 * @param {number} settings.blue - blue LED level in percentage
 * @param {string} owner - cognito username of owner
 * @returns {number} ID of newly created entry to setting table
 */
exports.createSetting = async (
  {
    floodFreq,
    floodDuration,
    ledOnTime,
    ledOffTime,
    fanDuration,
    fanInterval,
    red,
    green,
    blue,
  },
  owner
) => {
  try {
    const graphqlData = await axios({
      url: process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIKEYOUTPUT,
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
            owner,
          },
        },
      },
    })
    // return newly created settings entry id
    return graphqlData.data.data.createSetting.id
  } catch (err) {
    console.log('error creating settings: ', err)
  }
}

const axios = require('axios')
const gql = require('graphql-tag')
const graphql = require('graphql')
const { print } = graphql

const createDataGql = gql`
  mutation createData($input: CreateDataInput!) {
    createData(input: $input) {
      id
    }
  }
`
/**
 * Function to create new entry to data table
 * @param {object} data - current IoT data
 * @param {boolean} data.fanOn - whether fan is on
 * @param {number} data.hum - current humidity data in percentage
 * @param {boolean} data.ledOn - whether LED is on
 * @param {boolean} data.pumpOn - whether pump os on
 * @param {number} data.temp - current temperture data in celsius
 * @param {boolean} data.valveClosed - whether drain valve is closed
 * @param {string} owner - cognito username of owner
 * @returns {number} ID of newly created entry to data table
 */
exports.createData = async ({
  fanOn,
  hum,
  ledOn,
  pumpOn,
  temp,
  valveClosed,
  owner,
}) => {
  try {
    const graphqlData = await axios({
      url: process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIKEYOUTPUT,
      },
      data: {
        query: print(createDataGql),
        variables: {
          input: { fanOn, hum, ledOn, pumpOn, temp, valveClosed, owner },
        },
      },
    })

    // return newly created settings entry id
    return graphqlData.data.data.createData.id
  } catch (err) {
    console.log('error creating data: ', err)
  }
}

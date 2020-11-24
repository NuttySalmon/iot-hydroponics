const axios = require('axios')
const gql = require('graphql-tag')
const graphql = require('graphql')
const { print } = graphql

const getOwnerGql = gql`
  query getOnwer($id: ID!) {
    getDevice(id: $id) {
      owner
    }
  }
`
/**
 * Get owner of device
 * @param {number} deviceId
 * @return {string} owner's congito username
 */
exports.getOwner = async (deviceId) => {
  try {
    const graphqlData = await axios({
      url: process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIKEYOUTPUT,
      },
      data: { query: print(getOwnerGql), variables: { id: deviceId } },
    })
    return graphqlData.data.data.getDevice.owner
  } catch (err) {
    console.log('error getting owner for device: ', err)
  }
}

const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const getOwnerGql = gql`
  query getOnwer($id: ID!) {
    getDevice(id: $id) {
      owner
    }
  }
`

exports.getOwner = async (deviceId) => {
  try {
    const graphqlData = await axios({
      url: process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': "da2-syamaqysa5auvditnzp5ojlphm"
      },
      data: {
        query: print(getOwnerGql),
        variables:{
            id: deviceId
        }
      }
    });
    const body = {
        graphqlData: graphqlData.data.data.listTodos
    }
    return graphqlData.data.data.getDevice.owner
  } catch (err) {
    console.log('error posting to appsync: ', err);
  } 
}
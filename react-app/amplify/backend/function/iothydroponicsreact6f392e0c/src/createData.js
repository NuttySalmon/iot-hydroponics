const axios = require('axios')
const gql = require('graphql-tag')
const graphql = require('graphql')
const { print } = graphql

const createDataGql = gql `
  mutation createData($input: CreateDataInput!) {
    createData(input: $input) {
      id
    }
  }
`

exports.createData = async({ fanOn, hum, ledOn, pumpOn, temp, valveClosed, owner }) => {
  // console.log(process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIKEYOUTPUT)
  try {
    const graphqlData = await axios({
      url: process.env.API_IOTHYDROPONICSREACT_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': "da2-xdheoapoqjb4rngmd5hwhmuzda",
      },
      data: {
        query: print(createDataGql),
        variables: {
          input: {
            fanOn,
            hum,
            ledOn,
            pumpOn,
            temp,
            valveClosed,
            owner
          },
        },
      },
    })
    const body = {
      myError: graphqlData.error,
      message: 'successfully created todo!',
    }
    return graphqlData.data.data.createData.id
  }
  catch (err) {
    console.log('error creating todo: ', err)
  }
}

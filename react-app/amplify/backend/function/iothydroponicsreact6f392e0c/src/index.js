/* Amplify Params - DO NOT EDIT
	API_IOTHYDROPONICSREACT_GRAPHQLAPIENDPOINTOUTPUT
	API_IOTHYDROPONICSREACT_GRAPHQLAPIIDOUTPUT
	AUTH_IOTHYDROPONICSREACT212321DC_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { createData } = require('./createData')
const { getOwner } = require('./getOwner')
const { updateDevice } = require('./updateDevice')

exports.handler = async (event) => {
  const deviceId = event.topic.split('/')[2]
  const owner = await getOwner(deviceId)
  event.owner = owner
  const newDataId = await createData(event)
  await updateDevice(deviceId, newDataId)
  console.log(newDataId)
  // await createData(event)
}

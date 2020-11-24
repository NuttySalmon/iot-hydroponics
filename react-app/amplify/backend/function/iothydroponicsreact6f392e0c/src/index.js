/* Amplify Params - DO NOT EDIT
	API_IOTHYDROPONICSREACT_GRAPHQLAPIENDPOINTOUTPUT
	API_IOTHYDROPONICSREACT_GRAPHQLAPIIDOUTPUT
	AUTH_IOTHYDROPONICSREACT212321DC_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { createData } = require('./createData')
const { createSetting } = require('./createSetting')
const { getOwner } = require('./getOwner')
const { updateDevice } = require('./updateDevice')

exports.handler = async (event) => {
  const deviceId = event.topic.split('/')[2]
  const owner = await getOwner(deviceId)
  event.data.owner = owner
  event.settings.owner = owner
  const newDataId = await createData(event.data)
  const newSettingId = await createSetting(event.settings)
  await updateDevice(deviceId, newDataId, newSettingId)
  console.log(newDataId)
  console.log(newSettingId)
  // await createData(event)
}

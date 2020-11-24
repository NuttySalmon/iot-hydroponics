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

/**
 * @param {object} event
 * @param {object} event.data - current iot data
 * @param {object} event.settings -  current iot settings
 * @param {object} event.topic - topic that triggered this function
 */

exports.handler = async (event) => {
  const deviceId = event.topic.split('/')[2] // get device id by topic last section
  const owner = await getOwner(deviceId) // get device owner by id

  event.data.owner = owner
  event.settings.owner = owner
  const newDataId = await createData(event.data)
  const newSettingId = await createSetting(event.settings)

  // update device with new data and settings and trigger GraphQL subscription
  await updateDevice(deviceId, newDataId, newSettingId)
  // console.log(newDataId)
  // console.log(newSettingId)
}

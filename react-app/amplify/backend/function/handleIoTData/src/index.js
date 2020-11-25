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

/** Update device with settings and data.
 * @param {object} event
 * @param {object} event.iotData - iot data
 * @param {object} event.deviceId - device id
 */

exports.handler = async (event) => {
  // console.log('incoming:', event)
  const { iotData, deviceId } = event
  const { data, settings } = iotData
  // console.log('Device ID:', deviceId)

  const owner = await getOwner(deviceId) // get device owner by id

  const newDataId = await createData(data, owner)
  const newSettingId = await createSetting(settings, owner)

  // update device with new data and settings and trigger GraphQL subscription
  await updateDevice(deviceId, newDataId, newSettingId)

  // console.log(newDataId)
  // console.log(newSettingId)
}

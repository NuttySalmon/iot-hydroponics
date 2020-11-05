import React from 'react'
import { useParams } from 'react-router-dom'

const Device = () => {
  const { deviceId } = useParams()
  return <div>Device id: {deviceId}</div>
}

export default Device

import React from 'react'
import DeviceCard from './DeviceCard'
import { GraphQLUserDataType } from '../Dashboard/UserData'

function Home({ userData }: { userData: GraphQLUserDataType }) {
  const listDevices = () => {
    if (userData) {
      return userData?.devices?.items!.map((device, index) => (
        <DeviceCard {...device} key={device.id ? device.id : index} />
      ))
    }
    return null
  }
  return (
    <div>
      <p> Test from Home </p>
      {listDevices()}
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'
import DeviceCard from './DeviceCard'
import { userByCognitoId } from '../graphql/queries'
import { UserByCognitoIdQuery } from '../API'

type userDataType = {
  __typename: string
  id: string
  owner: string
  devices: {
    __typename: string
    items: Array<any> | null
  } | null
  createdAt: string
  updatedAt: string
} | null

function Home() {
  const [userData, setUserData] = useState<userDataType>(null)

  const fetchUser = async () => {
    try {
      const result = (await API.graphql(
        graphqlOperation(userByCognitoId, {
          owner: '990be0c7-7c8b-4556-82f2-63fb9c73ed1e',
        })
      )) as GraphQLResult<UserByCognitoIdQuery>
      const userList = result.data?.userByCognitoID?.items!
      if (userList) {
        setUserData(userList[0])
        console.log('hello')
      }

      // const devices = userData.
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const listDevices = () => {
    if (userData) {
      return userData?.devices?.items!.map((device, index) => (
        <div key={device.id ? device.id : index}>
          <p>{JSON.stringify(device)}</p>
        </div>
      ))
    }
    return null
  }
  return (
    <div>
      <p> Test from Home </p>
      {listDevices()}
      <DeviceCard />
    </div>
  )
}

export default Home

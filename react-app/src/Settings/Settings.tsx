import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'
import { userByCognitoId } from '../graphql/queries'
import { UserByCognitoIdQuery } from '../API'

// need a use case function

type userDataType = {
    typename: string
    id: string
    owner: string
    devices: {
      typename: string
      items: Array<any> | null
    } | null
    createdAt: string
    updatedAt: string
  } | null

function Settings() {
    const [userData, setUserData] = useState<userDataType>(null)
    const fetchUser = async () => { 
        const result = (await API.graphql(
          graphqlOperation(userByCognitoId, {
            owner: 'b904a3a4-ae51-4b23-ba74-fe9106091f7d',
          })
        )) as GraphQLResult<UserByCognitoIdQuery>
        const userList = result.data?.userByCognitoID?.items!
        if (userList) setUserData(userList[0])
    
        // const devices = userData.
        console.log(result.data)
      }
      return (
        <div>
          {' '}
        </div>
      )
    }

export default Settings

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

const Settings = () => {


    return <h1>test</h1>
}
export default Settings

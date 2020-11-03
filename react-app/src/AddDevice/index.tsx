import { API, graphqlOperation, PubSub } from 'aws-amplify'
import React, { useState, useEffect } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import TextField from '../common/components/TextField'
import { createDevice } from '../graphql/mutations'
import { userByCognitoId } from '../graphql/queries'

const AddDevice = () => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [idError, setIdError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [generalError, setGeneralError] = useState(false)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const result = await API.graphql(
      graphqlOperation(userByCognitoId, {
        owner: '5d9e2347-dd9d-4bcf-9731-6c084d5d0f0f',
      })
    )
    console.log(result)
  }

  const createDeviceAWS = async (e: React.FormEvent) => {
    e.preventDefault()
    setGeneralError(false)
    setIdError(id.length === 0)
    setNameError(name.length === 0)
    const newDevice = { id, name }
    if (id.length === 0 || name.length === 0) return
    try {
      await API.graphql(graphqlOperation(createDevice, { input: newDevice }))
    } catch (error) {
      console.log(error)
      setGeneralError(true)
    }
  }

  return (
    <Container className="mt-5">
      <h1> Add device</h1>
      <p
        className="warning"
        style={{ display: generalError ? 'inherit' : 'none' }}
      >
        Error occured and we cannot add the device
      </p>
      <Form onSubmit={createDeviceAWS}>
        <TextField
          label="Device ID"
          value={id}
          onChange={setId}
          hint="Invalid ID"
          error
          showHint={idError}
        />
        <TextField
          label="Nickname"
          value={name}
          onChange={setName}
          hint="Invalid nickname"
          error
          showHint={nameError}
        />
        <Button className="mt-5" variant="short" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default AddDevice

import { API, graphqlOperation } from 'aws-amplify'
import React, { useState } from 'react'
import { Form, Button, Row, Container } from 'react-bootstrap'
import HeaderBody from '../common/components/HeaderBody'
import TextField from '../common/components/TextField'
import { createDevice } from '../graphql/mutations'

const AddDevice = () => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [idError, setIdError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [generalError, setGeneralError] = useState(false)

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
  const header = (
    <Row>
      <h2>Add your new device</h2>
    </Row>
  )
  return (
    <HeaderBody back header={header}>
      <Container>
        <Row>
          <p
            className="warning"
            style={{ display: generalError ? 'inherit' : 'none' }}
          >
            Error occured and we cannot add the device
          </p>
        </Row>
        <Form onSubmit={createDeviceAWS} style={{ maxWidth: '400px' }}>
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
    </HeaderBody>
  )
}

export default AddDevice

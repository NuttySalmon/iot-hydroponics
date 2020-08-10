import React from 'react';
import { Form, Button,Row,Col } from 'react-bootstrap';
import './scss/sign-up.scss'

function App() {
  return (
    <div className="Page-caption">
            
      <h2 className="display">Create an Account</h2>
      <h3 className="display-2">Please enter the following information:</h3>

      <Form.Group as={Row} controlId="formFName">
        <Form.Label column sm={5}>
          First Name 
        </Form.Label>
        <Col sm={6}>
          <Form.Control size="sm" type="fName" placeholder="John" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formLName">
        <Form.Label column sm={5}>
          Last Name 
        </Form.Label>
        <Col sm={6}>
          <Form.Control size="sm" type="lName" placeholder="Smith" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formUser">
        <Form.Label column sm={5}>
          User Name 
        </Form.Label>
        <Col sm={6}>
          <Form.Control size="sm" type="uName" placeholder="John-Smith97" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formEmail">
        <Form.Label column sm={5}>
          Email Address
        </Form.Label>
        <Col sm={6}>
          <Form.Control size="sm" type="Email" placeholder="jsmith@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPassword">
        <Form.Label column sm={5}>
          Password
        </Form.Label>
        <Col sm={6}>
          <Form.Control    
            type="password"
            id="formPass"
            aria-describedby="passwordHelpBlock"
            placeholder="pass123"
            size="sm"
          />
        </Col>
      </Form.Group>
  
      <Form.Group as={Row} controlId="formDeviceID">
        <Form.Label column sm={5}>
          Hydrogarden Device ID
        </Form.Label>
        <Col sm={6}>
          <Form.Control size="sm" type="DevID" placeholder="KS1923" />
        </Col>
      </Form.Group>
      <Form.Text id="findID" muted>
        The Device ID is located on the bottom of the device.
      </Form.Text>
      <Form>
        {/* Checkbox */}
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I Agree to the Terms of Service" />
        </Form.Group>
        {/* Button */}
        <Button variant="primary">Create Account</Button>
        {'  '}
        <Button variant="secondary">Returning User</Button>
      </Form>

    </div>
  );
}

export default App;

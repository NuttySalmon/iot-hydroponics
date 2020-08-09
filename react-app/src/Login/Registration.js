import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

const Registration = () => {
    return(

        <Container className='regBox'>
            <Form>
                <h1 className='header'>Welcome Back</h1>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Control type="email" className='input'/>
                    <div className='inputName'>
                        <Form.Label>Email address</Form.Label>
                    </div>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" />
                    <div className='inputName'>
                        <Form.Label>Password</Form.Label>
                    </div>
                </Form.Group>
                <Button variant="outline-primary" className='submitButton'>
                    Submit
                </Button>{' '}
            </Form>
        </Container>
    );
}

export default Registration;
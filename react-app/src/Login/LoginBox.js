import React from 'react';
import {Container, Form, Button, Row} from 'react-bootstrap';
import LoginForm from './LoginForm';

const LoginBox = () => {
    return(
      <Row>
        <Container className='regBox'>
          <LoginForm />
        </Container>
      </Row>
      
    );
}

export default LoginBox;
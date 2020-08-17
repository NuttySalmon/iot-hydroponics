import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import TextField from '../common/components/TextField';
import '../common/scss/components/buttons.scss';
import '../common/scss/components/form-elements.scss';
import style from './scss/login.module.scss';

const LoginForm = () => {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  const awsSignIn = async (event) => {
    event.preventDefault();
    try {
      const user = await Auth.signIn(email, password);
      console.log(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  return (
    <Form className="user-form" onSubmit={awsSignIn}>
      <TextField label="Email" value={email} onChange={changeEmail} type="text" />  
      <div style={{ marginTop: '1.5em' }}>
        <TextField label="Password" value={password} onChange={changePassword} type="password" />  
      </div>
      <Row>
        <Col className={style.formBtn}>
          <Button variant="short" type="submit"> Login </Button>
        </Col>
      </Row>
      <div className={style.formLink}>
        <Row>
          <Col>
            <Link to="/signup">Don&apos;t have an account? </Link>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            <Link to="/forget-password">Forget password</Link>
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default LoginForm;

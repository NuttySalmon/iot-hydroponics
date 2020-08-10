import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm';
import style from './scss/login.module.scss';

const LoginBox = () => {
    return(
      <Row style={{margin: 0, height: '100vh'}}>
        <Container className={style.box}>
          <div className="align-self-center col"> 
            <Row><h1>Welcome Back</h1></Row>
            <Row><LoginForm /></Row>
            <div className='form-links'>
              <Row><Col className="link-sm"><Link to="/signup"> Don&apos;t have an account? </Link></Col></Row>
            </div>
          </div>

        </Container>
      </Row>
      
    );
}

export default LoginBox;
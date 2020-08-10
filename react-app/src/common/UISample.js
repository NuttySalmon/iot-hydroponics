import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import TextField from './components/TextField';

function UISample() {
  return (
    <div style={{padding: '30px'}}>
      <h1 className="logo-lg">TitleLogo</h1>
      <h1>Header</h1>
      <p>Paragraph</p>
      <Button variant='short'> Button </Button>
      <Button variant='long'> Long </Button>
      <div style={{ background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://post.healthline.com/wp-content/uploads/2020/03/taro-leaves-leaf-732x549-thumbnail.jpg")', padding: '10px', width:'100vw', marginTop: '50px'}}>
        <h3 className='logo-trans'> TransLogo</h3>
        <Button variant="trans">Transparent</Button>
        <Container style={{backgroundColor: 'white', margin:'30px', padding: '10px'}}>
          <Form>
            <TextField />
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default UISample;

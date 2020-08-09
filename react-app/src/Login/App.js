import React from 'react';
// import ReactDOM from 'react-dom';
import Registration from './Registration';
import {Container} from 'react-bootstrap';
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return(
      <Container className='backImage'>
          <Registration />
      </Container>
  );
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

export default App;

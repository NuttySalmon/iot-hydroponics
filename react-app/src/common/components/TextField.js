import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import '../scss/components/form.scss';

const TextField = ({children}) => {
  const [empty, changeEmptyState] = useState(true);
  const handleInput = (e) => changeEmptyState(e.target.value.length === 0);
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label className={empty ? 'label-center': 'label-small'}>{children}</Form.Label>
      <Form.Control type="email" onChange={handleInput} />
    </Form.Group>
  );
}

export default TextField

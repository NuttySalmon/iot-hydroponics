import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import '../scss/components/form-elements.scss'

const TextField = React.forwardRef(({children, id, type='text', as=undefined}, ref) => {
  const [empty, changeEmptyState] = useState(true);
  const handleInput = (e) => changeEmptyState(e.target.value.length === 0);
  return (
    <Form.Group as={as} controlId={id}>
      <Form.Label className={empty ? 'label-center': 'label-small'}>{children}</Form.Label>
      <Form.Control ref={ref} type={type} onChange={handleInput} />
    </Form.Group>
  );
});

export default TextField

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../scss/components/form-elements.scss';

const TextField = React.forwardRef((props, ref) => {
  const {
    children,
    id,
    type,
    showHint,
    error,
    as,
    hint,
    onFocus,
    onBlur,
    onChange,
  } = props;

  const [empty, changeEmptyState] = useState(true);
  const handleInput = (e) => {
    changeEmptyState(e.target.value.length === 0);
    if(onChange)
      onChange();
  };

  let hintStyle = 'no-hint';
  if (showHint) {
    hintStyle = error ? 'warning' : 'hint';
  }

  return (
    <Form.Group as={as} controlId={id}>
      <Form.Label className={empty ? 'label-center' : 'label-small'}>
        {children}
      </Form.Label>
      <Form.Control
        ref={ref}
        type={type}
        onChange={handleInput}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Form.Text className={hintStyle}>{hint}</Form.Text>
    </Form.Group>
  );
});

TextField.defaultProps = {
  type: 'text',
  showHint: false,
  error: false,
  as: undefined,
  hint: '',
  onFoucs: undefined,
  onBlur: undefined,
  onChange: undefined,
};

export default TextField;

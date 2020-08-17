import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import '../scss/components/form-elements.scss';

const TextField = (props) => {
  const {
    value,
    children,
    hint,
    type,
    showHint,
    error,
    as,
    onFocus,
    onBlur,
    onChange,
  } = props;

  const [empty, changeEmptyState] = useState(true);
  const handleChange = (e) => {
    e.preventDefault();
    const currValue = e.target.value
    changeEmptyState(currValue.length === 0);
    if (onChange) {
      onChange(currValue);
    }
  };
  
  const hintStyle = showHint ? 'hint' : 'no-hint';
  const errorStyle = error ? 'warning' : null;

  return (
    <Form.Group as={as}>
      <Form.Label className={empty ? 'label-center' : 'label-small'}>
        {children}
      </Form.Label>
      <Form.Control
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Form.Text className={`${hintStyle} ${errorStyle}`}>{hint}</Form.Text>
    </Form.Group>
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hint: PropTypes.string,
  type: PropTypes.string,
  showHint: PropTypes.bool,
  error: PropTypes.bool,
  as: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  type: 'text',
  showHint: false,
  error: true,
  as: undefined,
  hint: '',
  onFocus: undefined,
  onBlur: undefined,
  onChange: undefined,
};

export default TextField;

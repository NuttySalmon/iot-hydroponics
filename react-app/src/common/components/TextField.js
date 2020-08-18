import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import '../scss/components/form-elements.scss'

/**
 * Render text box input element with form group, with label and hint/error support
 * @param {object} props
 */
const TextField = (props) => {
  const {
    value,
    onChange,
    label,
    hint,
    type,
    showHint,
    error,
    as,
    onBlur,
    onFocus,
  } = props

  const [empty, changeEmptyState] = useState(true)
  const handleChange = (e) => {
    e.preventDefault()
    const currValue = e.target.value
    changeEmptyState(currValue.length === 0)
    if (onChange) {
      onChange(currValue)
    }
  }

  const hintStyle = showHint ? 'hint' : 'no-hint'
  const errorStyle = error ? 'warning' : ''

  return (
    <Form.Group as={as}>
      <Form.Label className={empty ? 'label-center' : 'label-small'}>
        {label}
      </Form.Label>
      <Form.Control
        onChange={handleChange}
        {...{ type, value, onBlur, onFocus }}
      />
      <Form.Text className={`${hintStyle} ${errorStyle}`}>{hint}</Form.Text>
    </Form.Group>
  )
}

TextField.propTypes = {
  /** Controlled value of input field */
  value: PropTypes.string.isRequired,
  /** Function on change. Current value will be passed in. */
  onChange: PropTypes.func,
  /** Label for the input element */
  label: PropTypes.string.isRequired,
  /** Hint/warning text */
  hint: PropTypes.string,
  /** Input type */
  type: PropTypes.string,
  /** Whether to show hint/warning message */
  showHint: PropTypes.bool,
  /** Render hint as error style */
  error: PropTypes.bool,
  /** Bootstrap form group 'as' */
  as: PropTypes.string,
  /** Function triggered when input element is in focus */
  onFocus: PropTypes.func,
  /** Function triggered when input element is out of focus */
  onBlur: PropTypes.func,
}

TextField.defaultProps = {
  type: 'text',
  showHint: false,
  error: true,
  as: undefined,
  hint: '',
  onFocus: undefined,
  onBlur: undefined,
  onChange: undefined,
}

export default TextField

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import '../scss/components/form-elements.scss'
import { ExclamationSvg } from './SvgIcons'

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
    changeIsFocused,
  } = props

  const [isEmpty, changeEmptyState] = useState(true)
  const [isFocused, changeFocusState] = useState(false)

  const handleFocusChange = (focused) => {
    changeFocusState(focused)
    if (changeIsFocused) {
      changeIsFocused(focused)
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    changeEmptyState(e.target.value.length === 0)
    onChange(e.target.value)
  }

  const hintStyle = showHint ? '' : 'd-none'
  const errorShowing = error && showHint
  const errorStyle = errorShowing ? 'warning' : ''
  const labelStyle =
    isFocused || !isEmpty ? `label-small ${errorStyle}` : 'label-center'
  const inputLineStyle = errorShowing ? 'red-line' : 'normal-line'
  const iconStyle = errorShowing ? 'hint-icon' : 'd-none'

  return (
    <Form.Group as={as}>
      <Form.Label className={labelStyle}>{label}</Form.Label>
      <Form.Control
        className={inputLineStyle}
        onChange={handleChange}
        onFocus={() => handleFocusChange(true)}
        onBlur={() => handleFocusChange(false)}
        {...{ type, value }}
      />
      <Form.Text className={`${hintStyle} ${errorStyle}`}>
        <div>
          <span className={iconStyle}>
            <ExclamationSvg />
          </span>
          <span className="hint-text"> {hint}</span>
        </div>
      </Form.Text>
    </Form.Group>
  )
}

TextField.propTypes = {
  /** Controlled value of input field */
  value: PropTypes.string.isRequired,
  /** Function on change. Current value will be passed in. */
  onChange: PropTypes.func.isRequired,
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
  /** Function that takes in bool whether input is focused */
  changeIsFocused: PropTypes.func,
}

TextField.defaultProps = {
  type: 'text',
  showHint: false,
  error: true,
  as: undefined,
  hint: '',
  changeIsFocused: undefined,
}

export default TextField

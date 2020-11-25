import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import '../scss/components/form-elements.scss'
import { ExclamationIcon } from './SvgIcons'

/**
 * Render text box input element with form group, with label and hint/error support
 *
 */
type TextFieldProp = {
  /** Controlled value of input field */
  value: string
  /** Function on change. Current value will be passed in. */
  onChange: (value: string) => void
  /** Label for the input element */
  label: string
  /** Hint/warning text */
  hint?: string
  /** DOM input type */
  type?: string
  /** Whether to show hint/warning message */
  showHint?: boolean
  /** Render hint as error style */
  error?: boolean
  /** Bootstrap form group 'as' */
  as?: React.ElementType
  /** Function that takes in bool whether input is focused */
  changeIsFocused?: (isFocused: boolean) => void
}

const TextField = (props: TextFieldProp) => {
  const {
    value,
    onChange,
    label,
    hint = '',
    type = 'text',
    showHint = false,
    error = true,
    as,
    changeIsFocused,
  } = props

  const [isEmpty, changeEmptyState] = useState(true)
  const [isFocused, changeFocusState] = useState(false)

  const handleFocusChange = (focused: boolean): void => {
    changeFocusState(focused)
    if (changeIsFocused) {
      changeIsFocused(focused)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
        onFocus={(): void => handleFocusChange(true)}
        onBlur={(): void => handleFocusChange(false)}
        role={`${label.toLowerCase()}-input`}
        {...{ type, value }}
      />
      <Form.Text className={`${hintStyle} ${errorStyle}`}>
        <div>
          <span className={iconStyle}>
            <ExclamationIcon />
          </span>
          <span
            data-testid={`${label.toLowerCase()}-hint`}
            className="hint-text"
          >
            {hint}
          </span>
        </div>
      </Form.Text>
    </Form.Group>
  )
}

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  type: PropTypes.string,
  showHint: PropTypes.bool,
  error: PropTypes.bool,
  as: PropTypes.string,
  changeIsFocused: PropTypes.func,
}

export default TextField

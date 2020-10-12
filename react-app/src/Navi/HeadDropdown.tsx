/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Ref = HTMLAnchorElement
type HeadDropdownToggleProps = {
  children: React.ReactNode
  onClick: (e: React.SyntheticEvent) => void
}
const HeadDropdown = React.forwardRef<Ref, HeadDropdownToggleProps>(
  ({ children, onClick }: HeadDropdownToggleProps, ref) => {
    return (
      <a
        href=""
        ref={ref}
        onClick={(e) => {
          e.preventDefault()
          onClick(e)
        }}
      >
        {children}
      </a>
    )
  }
)

export default HeadDropdown

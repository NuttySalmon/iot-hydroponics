import React from 'react'

export const ExclamationSvg = ({
  fill = 'CurrentColor',
  width = '16px',
  height = '16px',
}) => {
  return (
    <svg
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="https://www.w3.org/2000/svg"
      {...{ fill, width, height }}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  )
}

export const Bell = ({
  // fill = 'CurrentColor',
  // width = '16px',
  // height = '16px',
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="CurrentColor"
      {...className}
    >
      <path d="M16 7a5.38 5.38 0 0 0-4.46-4.85C11.6 1.46 11.53 0 10 0S8.4 1.46 8.46 2.15A5.38 5.38 0 0 0 4 7v6l-2 2v1h16v-1l-2-2zm-6 13a3 3 0 0 0 3-3H7a3 3 0 0 0 3 3z" />
    </svg>
  )
}

import React from 'react'

export const ExclamationIcon = ({
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

export const BellIcon = ({
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

export const CircleIcon = ({ className = '', size = 12 }) => {
  const dimensions = size.toString()
  const centerCoor = (size / 2 - 1).toString()
  const radius = ((size / 2) * 0.8).toString()
  return (
    <svg height={dimensions} width={dimensions} className={className}>
      <circle cx={centerCoor} cy={centerCoor} r={radius} fill="currentColor" />
    </svg>
  )
}

export const GearIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    className={className}
  >
    <path
      d="M25.873,17.3a8.13,8.13,0,0,0,.066-1.3c0-.455-.066-.845-.066-1.3l2.792-2.145a.6.6,0,0,0,.133-.845L26.138,7.225a.647.647,0,0,0-.8-.26l-3.324,1.3a9.676,9.676,0,0,0-2.26-1.3L19.291,3.52A.712.712,0,0,0,18.626,3H13.307a.712.712,0,0,0-.665.52l-.532,3.445a11.258,11.258,0,0,0-2.261,1.3l-3.324-1.3a.623.623,0,0,0-.8.26L3.069,11.71a.785.785,0,0,0,.133.845L6.061,14.7c0,.455-.066.845-.066,1.3s.066.845.066,1.3L3.269,19.445a.6.6,0,0,0-.133.845L5.8,24.775a.647.647,0,0,0,.8.26l3.324-1.3a9.675,9.675,0,0,0,2.26,1.3l.532,3.445a.644.644,0,0,0,.665.52h5.319a.712.712,0,0,0,.665-.52l.532-3.445a11.252,11.252,0,0,0,2.26-1.3l3.324,1.3a.623.623,0,0,0,.8-.26l2.659-4.485a.784.784,0,0,0-.133-.845Zm-9.906,3.25A4.551,4.551,0,1,1,20.621,16,4.574,4.574,0,0,1,15.967,20.55Z"
      transform="translate(-3 -3)"
    />
  </svg>
)

export const GraphIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21.458"
    height="21.458"
    viewBox="0 0 21.458 21.458"
    className={className}
  >
    <path d="M18.856,0,10.729,8.047,8.047,5.365,0,13.492l2.682,2.682,5.365-5.445,2.682,2.682L21.458,2.682ZM0,18.776v2.682H21.458V18.776Z" />
  </svg>
)

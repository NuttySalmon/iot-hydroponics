import React from 'react'

interface AuthComponent {
  /** Auth state from authencator */
  authState: string
}

type ControlledDisplayProps = {
  /** Auth state from authencator */
  authState?: string
  /** State when component to be displayed */
  matchState: string
  /** Component to be displayed */
  render: React.FC<AuthComponent>
}

/** Wrapper to let auth state determining component display */
const ControlledDisplay = ({
  authState,
  matchState,
  render: C,
}: ControlledDisplayProps) => {
  const conditionalComponent =
    authState === matchState ? <C {...{ authState }} /> : matchState
  return <div>{conditionalComponent}</div>
}

export default ControlledDisplay

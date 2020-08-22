/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom'

interface RouteProtectedProps {
  /** Component to be rendered */
  render: React.FC<{}>
  /** Props for the component to be rendered */
  componentProps?: object
  isSignedIn: boolean
}

// extend route props
type ProtoExntends<T, U> = U & Omit<T, keyof U>
type Props = ProtoExntends<RouteProps, RouteProtectedProps>

const RouteProtected = ({
  render: C,
  componentProps,
  isSignedIn,
  ...other
}: Props) => {
  const newRender = () => <C {...componentProps} />
  const RenderDecision = ({ location }: RouteComponentProps) => {
    if (!isSignedIn)
      return (
        <Redirect
          to={`/user/login?redirect=${location.pathname}${location.search}`}
        />
      )
    return newRender
  }
  return <Route {...other} render={RenderDecision} />
}

export default RouteProtected

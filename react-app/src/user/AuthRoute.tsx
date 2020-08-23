/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Route } from 'react-router-dom'

import { PagesEnum } from './pageStates'

interface AuthComponent {
  /** Auth state from authencator */
  authState?: string
}
export type AuthRouteProps = {
  path: string
  pageState?: PagesEnum
  matchState: PagesEnum
  changeCurrPage?: React.Dispatch<React.SetStateAction<PagesEnum>>
  render: React.FC<AuthComponent>
}

/** Authentication related routes. Responsible for updating page state when url accessed */
const AuthRoute = ({
  path,
  pageState = PagesEnum.LANDING,
  matchState,
  changeCurrPage,
  render: C,
  ...rest
}: AuthRouteProps) => (
  <Route
    path={path}
    render={() => {
      console.log(`authRoute Triggered. Path: ${path} State: ${pageState}`)
      if (changeCurrPage) changeCurrPage(matchState) // change state when route visited
      return <C {...rest} />
    }}
  />
)

export default AuthRoute

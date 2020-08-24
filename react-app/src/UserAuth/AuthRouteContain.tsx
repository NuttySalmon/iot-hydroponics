import React, { Children, cloneElement } from 'react'
// import { IAuthenticatorProps } from 'aws-amplify-react/lib-esm/Auth/Authenticator'
import { AuthRouteProps } from './AuthRoute'

type PageControlProps = {
  /** Children elements */
  children: React.ReactChild[] | React.ReactChild
  /** Function to change current page state */

  /** Function to change current page state */
} & Omit<AuthRouteProps, 'path' | 'matchState' | 'render'>

/** Container around controlled pages for passing in props related to current page state */
const AuthRouteContain = ({ children, ...rest }: PageControlProps) => {
  const proppedChildren = Children.map(children, (child) =>
    cloneElement<AuthRouteProps>(child as React.ReactElement, {
      ...rest,
    })
  )
  return <> {proppedChildren} </>
}

export default AuthRouteContain

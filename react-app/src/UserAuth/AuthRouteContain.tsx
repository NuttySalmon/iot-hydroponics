import React, { Children, cloneElement } from 'react'
import { AuthRoutingProps } from './RouteRedirect'

type PageControlProps = {
  children: React.ReactChild[] | React.ReactChild
  loggedIn: boolean
}

/** Container around controlled pages for passing in props for logged in state */
const AuthRouteContain = ({ children, ...rest }: PageControlProps) => {
  const proppedChildren = Children.map(children, (child) =>
    cloneElement<AuthRoutingProps>(child as React.ReactElement, {
      ...rest,
    })
  )
  return <>{proppedChildren} </>
}

export default AuthRouteContain

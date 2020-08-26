import React, { Children, cloneElement } from 'react'
import { AuthRouteProps } from './AuthRoute'

type PageControlProps = {
  children: React.ReactChild[] | React.ReactChild
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

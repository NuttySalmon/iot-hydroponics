import React, { Children, cloneElement } from 'react'

export type AuthChildRouteProps = {
  path: string
  render: React.FC
  loggedIn?: boolean
}

type PageControlProps = {
  children: React.ReactChild[] | React.ReactChild
} & Omit<AuthChildRouteProps, 'path' | 'render'>

/** Container around controlled pages for passing in props related to current page state */
const AuthRouteContain = ({ children, ...rest }: PageControlProps) => {
  const proppedChildren = Children.map(children, (child) =>
    cloneElement<AuthChildRouteProps>(child as React.ReactElement, {
      ...rest,
    })
  )
  return <> {proppedChildren} </>
}

export default AuthRouteContain

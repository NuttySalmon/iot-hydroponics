import React, { Children, cloneElement } from 'react'
import { IAuthenticatorProps } from 'aws-amplify-react/lib-esm/Auth/Authenticator'
import { PagesEnum } from './pageStates'

type PageControlProps = {
  /** Children elements */
  children: React.ReactChild[]
  /** Current page state */
  pageState: PagesEnum
  /** Function to change current page state */
  changeCurrPage: React.Dispatch<React.SetStateAction<PagesEnum>>
} & IAuthenticatorProps

/** Container around controlled pages for passing in props related to current page state */
const PageControl = ({
  children,
  pageState,
  authState,
  changeCurrPage,
  ...rest
}: PageControlProps) => {
  const proppedChildren = Children.map(children, (child) =>
    cloneElement(child as React.ReactElement, {
      ...{ pageState, changeCurrPage },
      ...rest,
    })
  )
  return <> {proppedChildren} </>
}

export default PageControl

import { createContext } from 'react'

/** Save user info globally */
const UserContext = createContext({
  loggedIn: false,
  changeLoggedIn: (loggedIn: boolean) => null,
})

export default UserContext

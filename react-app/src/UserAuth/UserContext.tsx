import { createContext } from 'react'

type UserContextType = {
  user: object | null
  changeUser: React.Dispatch<React.SetStateAction<boolean>>
}

/** Save user info globally */
const UserContext = createContext({
  loggedIn: false,
  changeLoggedIn: (loggedIn: boolean) => null,
})

export default UserContext

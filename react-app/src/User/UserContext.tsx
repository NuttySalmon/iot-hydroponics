import { createContext } from 'react'

type UserContextType = {
  user: object | null
  changeUser: React.Dispatch<React.SetStateAction<object>>
}

/** Save user info globally */
const UserContext = createContext({
  user: null,
  changeUser: (user: object | null) => null,
})

export default UserContext

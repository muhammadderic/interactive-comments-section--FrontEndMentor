import { createContext, useEffect, useReducer } from "react"
import UserReducer from "./UserReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user") || null),
}

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user))
  }, [state.user])

  return (
    <UserContext.Provider value={{
      user: state.user,
      dispatch,
    }}>
      {children}
    </UserContext.Provider>
  )
}
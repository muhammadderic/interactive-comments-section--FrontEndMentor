import { createContext, useReducer } from "react"
import UserReducer from "./UserReducer";

const currentUser = JSON.parse(localStorage.getItem("user"));
let currentComments = JSON.parse(localStorage.getItem("comments"))

if (currentUser) {
  currentComments = currentComments.filter(cc => cc.user.username === currentUser.username);
}

const INITIAL_STATE = {
  user: currentUser?.username,
  comments: currentComments,
}

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  return (
    <UserContext.Provider value={{
      user: state.user,
      comments: state.comments,
      dispatch,
    }}>
      {children}
    </UserContext.Provider>
  )
}
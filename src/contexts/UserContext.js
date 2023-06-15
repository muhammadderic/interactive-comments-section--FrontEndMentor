import { createContext, useReducer } from "react"
import UserReducer from "./UserReducer";

const currentUser = JSON.parse(localStorage.getItem("user"));
const currentComments = JSON.parse(localStorage.getItem("comments"))

let currentUserComments = currentComments;
if (currentUser) {
  currentUserComments = currentComments.filter(cc => cc.user.username === currentUser);
}

const INITIAL_STATE = {
  user: currentUser,
  comments: currentUserComments,
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
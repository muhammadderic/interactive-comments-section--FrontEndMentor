const UserReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER": return {
      user: action.payload.username,
      ...state,
    }
    case "LOGIN": return {
      user: action.payload.username,
      comments: action.payload.comments,
    }
    case "LOGOUT": return {
      user: null,
      comments: null,
    }
    default: return state;
  }
}

export default UserReducer;
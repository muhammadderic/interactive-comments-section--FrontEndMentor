const UserReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER": return {
      user: action.payload,
    }
    case "LOGIN": return {
      user: action.payload,
    }
    case "LOGOUT": return {
      user: null,
    }
    default: return state;
  }
}

export default UserReducer;
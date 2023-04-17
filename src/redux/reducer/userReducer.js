import { USER_LOGIN } from "../constant/UserContant"

const initialState = {
    UserInfo: null,
}

let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case USER_LOGIN:
    return { ...state, UserInfo: payload };

  default:
    return state
  }
}

export default userReducer;
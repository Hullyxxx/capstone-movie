import { localUserServ } from "../../service/localService";
import { USER_LOGIN } from "../constant/UserContant"

const initialState = {
    userInfo: localUserServ.get(),
}

let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case USER_LOGIN:
    return { ...state, userInfo: payload };

  default:
    return state
  }
}

export default userReducer;
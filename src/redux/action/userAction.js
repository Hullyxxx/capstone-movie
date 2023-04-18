import { message } from "antd"
import { localUserServ } from "../../service/localService"
import { userServ } from "../../service/userService"
import { USER_LOGIN } from "../constant/UserContant"

export const setLoginAction = (value) => {
    //value đến từ respone axios
    return {
        type: USER_LOGIN,
        payload: value,
    }
}

export const setLoginActionService = (value, onComPleted) => {
    //value đến từ thẻ form của antd
    return (dispatch) => {
        userServ.postLogin(value)
            .then(response => {
                console.log(response)
                localUserServ.set(response.data.content);
                dispatch({
                    type: USER_LOGIN,
                    payload: response.data.content,
                })
                onComPleted()
            })
            .catch(error => console.log("error :", error))
    }
}
import axios from "axios";
import { BASE_URL, configHeaders } from "./config";

export const userServ = {
    postLogin: (dataLoginForm) => {
        return axios({
            url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
            method: "POST",
            data: dataLoginForm,
            headers: configHeaders(),
        });
    },
}
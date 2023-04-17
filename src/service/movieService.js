import axios from "axios"
import { BASE_URL, configHeaders } from "./config";

export const movieServ = {
    getMovieList: () => {
        return axios({
            url: `${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00`,
            method: "GET",
            headers: configHeaders(),
        });
    },
    getMovieByTheater: () => {
        return axios({
            url: `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00`,
            method: "GET",
            headers: configHeaders(),
        });
    }
}
import axios from "axios"
import { BASE_URL, configHeaders, https } from "./config";

export const movieServ = {
    getMovieList: () => {
        return https.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00')
    },
    getMovieByTheater: () => {
        return https.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00`)
    },
    getDetailMovie: (idPhim) => {
        return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`)
    }
}
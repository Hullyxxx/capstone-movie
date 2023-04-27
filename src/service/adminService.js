import { https } from "./config"

export const adminServ = {
    getUsersList: () => { 
        return https.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00')
     }
}
import { https } from "./config"

export const adminServ = {
    getUsersList: () => { 
        return https.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00')
     },
     deleteUser: (taiKhoan) => { 
        return https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
      }
}
import { Button, Tag, message } from "antd"
import { adminServ } from "../../service/adminService"

export const headerUserTable = [
    {
        title: 'Tài khoản',
        dataIndex: 'taiKhoan',
        key: 'taiKhoan'
    },
    {
        title: 'Họ & Tên',
        dataIndex: 'hoTen',
        key: 'hoTen'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Loại người dùng',
        dataIndex: 'maLoaiNguoiDung',
        key: 'maLoaiNguoiDung',
        render: (type) => {
            return type == 'KhachHang' ? <Tag color="blue">Khách hàng</Tag> : <Tag color="red">Quản trị</Tag>
        }
    },
    {
        title: 'Thao tác',
        dataIndex: 'thaoTac',
        key: 'thaoTac',
        render: (_, user) => {
            return <>
                <Button
                    onClick={() => {
                        adminServ.deleteUser(user.taiKhoan)
                            .then(res => {
                                message.success('Thành công')
                                console.log(res)
                            })
                            .catch(err => {
                                message.error(err.response.data.content)
                                console.log(err)
                            })

                    }}
                    type="primary" danger>
                    x
                </Button>
            </>
        }
    },
]
import { Button, Tag } from "antd"

export const headerUserTable = [
    {
        title: 'Tên Phim',
        dataIndex: 'tenPhim',
        key: 'tenPhim'
    },
    {
        title: 'Mô tả',
        dataIndex: 'moTa',
        key: 'moTa'
    },
    {
        title: 'Hình Ảnh',
        dataIndex: 'hinhAnh',
        key: 'hinhAnh',
        render: (srcHinhAnh) => {
            return <>
               <img style={{width: '50%'}} src={srcHinhAnh} alt={srcHinhAnh} />
            </>
        }
    },
]
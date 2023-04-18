import moment from 'moment/moment'
import React from 'react'

export default function ItemTabMovie({ phim }) {
    return (
        <div className='p-5 flex space-x-10'>
            <img src={phim.hinhAnh} className='w-28 h-36' alt='' />
            <div>
                <h3 className='font-medium text-xl'>{phim.tenPhim}</h3>
                <div className='grid grid-cols-3 gap-5'>
                    {phim.lstLichChieuTheoPhim.slice(0,9).map(item => {
                        return <span className='rounded p-2 bg-red-500 text-white font-medium'>{moment(item.ngayChieuGioChieu).format("DD/MM/YYYY ~ hh:mm")}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

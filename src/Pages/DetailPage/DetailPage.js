import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { https } from '../../service/config'
import { movieServ } from '../../service/movieService'
import { Progress } from 'antd'

export default function DetailPage() {
    let { idPhim } = useParams()
    const [movieDetail, setMovieDetail] = useState([])
    let { hinhAnh, tenPhim, moTa, danhGia } = movieDetail
    useEffect(() => {
        let fetchDetail = async () => {
            try {
                let movieDetail = await movieServ.getDetailMovie(idPhim)
                console.log(movieDetail)
                setMovieDetail(movieDetail.data.content)
            } catch (error) {
                console.log("🚀 ~ file: DetailPage.js:15 ~ fetchDetail ~ error:", error)
            }
        }
        fetchDetail()
    }, [])

    return (
        <div className='container '>
            <div className='flex space-x-10' >
                <img className='w-1/3' src={hinhAnh} />
                <div className='space-y-5'>
                    <h2>{tenPhim}</h2>
                    <h2>{moTa}</h2>
                    <Progress percent={danhGia * 10} />
                </div>
            </div>
            <NavLink className={'rounded px-5 py-2 bg-red-500 text-white font-medium'} to={`/booking/${idPhim}`}>
                Mua vé
            </NavLink>
        </div>
    )
}

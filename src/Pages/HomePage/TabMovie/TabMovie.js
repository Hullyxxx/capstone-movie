import React, { useEffect, useState } from 'react'
import { movieServ } from '../../../service/movieService'

import { Tabs } from 'antd';
import ItemMovie from '../ListMovie/ItemMovie';
import ItemTabMovie from './ItemTabMovie';

const onChange = (key) => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: `Tab 1`,
        children: `Content of Tab Pane 1`,
    },
];



export default function TabMovie() {
    const [heThongRap, setHeThongRap] = useState([])

    useEffect(() => {
        movieServ.getMovieByTheater()
            .then(response => {
                console.log(response)
                setHeThongRap(response.data.content)
            })
            .catch(error => {
                console.log("error :", error)
            })
    }, [])

    let renderHeThongRap = () => {
        return heThongRap.map((rap) => {
            return {
                key: rap.maHeThongRap,
                label: <img className='h-16' src={rap.logo} />,
                children: <Tabs style={{ height: 500 }} defaultActiveKey="1" tabPosition='left' items={rap.lstCumRap.map(cumRap => {
                    return {
                        key: cumRap.tenCumRap,
                        label: <div>{cumRap.tenCumRap}</div>,
                        children: <div style={{ height: 500 }} className='overflow-y-scroll '>
                            {cumRap.danhSachPhim.map(item => {
                                return <ItemTabMovie phim={item} />
                            })}
                        </div>
                    }
                })} onChange={onChange} />,
            }
        })
    }

    return (
        <Tabs style={{ height: 500 }} defaultActiveKey="1" tabPosition='left' items={renderHeThongRap()} onChange={onChange} />
    )
}

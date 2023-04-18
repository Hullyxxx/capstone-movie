import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;

const ItemMovie = (data) => {
    let { hinhAnh, tenPhim, biDanh, moTa, maPhim } = data.data
    return <Card
        hoverable

        cover={<img className='h-40 object-cover object-top' alt="example" src={hinhAnh} />}
    >
        <Meta
            className='h-20'
            title={moTa}
            description={<NavLink
                className={'px-5 py-2 border-red-500 rounded border-2'}
                to={`/detail/${maPhim}`}>
                Xem ngay
            </NavLink>} />
    </Card>
};
export default ItemMovie;
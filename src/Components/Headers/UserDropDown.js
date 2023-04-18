import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const UserDropDown = ({ user, btnLogOut }) => {
    const items = [
        {
            label: <a href="#">Cập nhật tài khoản</a>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: btnLogOut,
            key: '3',
        },
    ];
    return <Dropdown
        menu={{
            items,
        }}
        trigger={['click']}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                {user.hoTen}
                <DownOutlined />
            </Space>
        </a>
    </Dropdown>
};

export default UserDropDown
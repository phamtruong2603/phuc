import React from 'react';
import { Dropdown, Space, Button } from 'antd';
import type { MenuProps } from 'antd';
import Avatar from '../Avatar/Avatar';

const items: MenuProps['items'] = [
    {
        key: '3',
        label: (
            <>{`Thông tin cá nhân -->`}</>
        ),
    },
    {
        key: '',
        label: (
            <Button>Đăng xuất</Button>
        ),
    },
];
const DropdowHeader: React.FC = () => {
    return (
        <Dropdown
            menu={{ items }}
            trigger={["click"]}
        >
            <Space>
                <Avatar width='50px' />
            </Space>
        </Dropdown>
    )
}

export default DropdowHeader
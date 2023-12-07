import React from 'react';
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from 'antd/es/table';

interface ITableRoom {
    dataSource: any
}

// STT, Họ Tên, Username, Email, Địa Chỉ, Trạng Thái, Rạp Quản Lý
const columns: ColumnsType<any> = [
    {
        title: 'STT',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
        className: ''
    },
    {
        title: 'Họ Tên',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        className: ''
    },
    {
        title: 'Username',
        key: 'price',
        dataIndex: 'price',
        align: 'center',
        className: ''
    },
    {
        title: 'Email',
        key: 'max_user',
        dataIndex: 'max_user',
        align: 'center',
        className: ''
    },
    {
        title: 'Địa Chỉ',
        key: 'max_user',
        dataIndex: 'max_user',
        align: 'center',
        className: ''
    },
    {
        title: 'Trạng Thái',
        key: 'max_user',
        dataIndex: 'max_user',
        align: 'center',
        className: ''
    },
    {
        title: 'Rạp Quản Lý',
        key: 'max_user',
        dataIndex: 'max_user',
        align: 'center',
        className: ''
    },
];

const TableAdminAccounts:React.FC<ITableRoom> = ({ dataSource }) => {
    return (
        <Table
            bordered={true}
            columns={columns} dataSource={dataSource}
            pagination={false}
        />
    )
}

export default TableAdminAccounts
import React from 'react';
import { Table } from "antd";
import type { ColumnsType } from 'antd/es/table';

interface ITableRoom {
    dataSource: any
}

// STT, Họ Tên, Username, Email, Địa Chỉ, Trạng Thái
const columns: ColumnsType<any> = [
    {
        title: 'STT',
        dataIndex: 'key',
        key: 'key',
        align: 'center',
        className: ''
    },
    {
        title: 'Họ Tên',
        dataIndex: 'fullname',
        key: 'fullname',
        align: 'center',
        className: ''
    },
    {
        title: 'Username',
        key: 'username',
        dataIndex: 'username',
        align: 'center',
        className: ''
    },
    {
        title: 'Email',
        key: 'email',
        dataIndex: 'email',
        align: 'center',
        className: ''
    },
    {
        title: 'Địa Chỉ',
        key: 'address',
        dataIndex: 'address',
        align: 'center',
        className: ''
    },
    {
        title: 'Trạng Thái',
        key: 'blocked',
        dataIndex: 'blocked',
        align: 'center',
        className: ''
    },
];

const TableGuestAccounts: React.FC<ITableRoom> = ({ dataSource }) => {
    return (
        <Table
            bordered={true}
            columns={columns} dataSource={dataSource}
            pagination={false}
        />
    )
}

export default TableGuestAccounts
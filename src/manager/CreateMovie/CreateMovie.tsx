import React from 'react';
import { Button, DatePicker, Form, Input } from 'antd';

type FieldType = {};

// Tên phim, Thể loại, Mô tả, Ngày phát hành, Thời lượng(phút), Ảnh thumbnails
const CreateMovie = () => {
    const initialValues = {}

    const onFinish = async (values: FieldType) => { };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={initialValues}
        >
            <Form.Item<FieldType>
                label="Tên phim"
                name="name"
            >
                <Input placeholder='' />
            </Form.Item>

            <Form.Item<FieldType>
                label="Thể loại"
                name="description"
            >
                <Input placeholder='' />
            </Form.Item>

            <Form.Item<FieldType>
                label="Mô tả"
                name="status"
            >
                <Input placeholder='' />
            </Form.Item>

            <Form.Item<FieldType>
                label="Ngày phát hành"
                name="status"
            >
                <DatePicker
                    style={{ width: '100%' }}
                />
            </Form.Item>

            <Form.Item<FieldType>
                label="Thời lượng(phút)"
                name="status"
            >
                <Input placeholder='' />
            </Form.Item>

            <Form.Item<FieldType>
                label="Ảnh thumbnails"
                name="status"
            >
                <DatePicker
                    style={{ width: '100%' }}
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CreateMovie
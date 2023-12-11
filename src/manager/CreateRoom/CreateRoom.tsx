import React from 'react';
import { Button, Form, Input, Select } from 'antd';
type FieldType = {};

const CreateRoom = () => {
    const initialValues = {}
    const onFinish = () => { }
    return (
        <div>
            <header>Tạo phòng </header>

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
                    label="Chọn phim"
                    name="name"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Chọn phòng chiếu"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Giờ chiếu"
                    name="description"
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default CreateRoom
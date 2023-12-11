import React from 'react';
import './index.css';
import { Button, Form, Select, TimePicker } from 'antd';
import type { SelectProps } from 'antd';
import type { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';

dayjs.extend(customParseFormat);

type FieldType = {};

// Danh sách các phim, Danh sách phòng
const ScheduleMovieShowings = () => {

  const initialValues = {}

  const onFinish = () => { }

  const handleChange = () => { }

  const options: SelectProps['options'] = []

  const onchange = (value: Dayjs | null, timeString: string) => {
    if (value) {
      console.log(value, timeString);
    }
  };

  return (
    <div className='ScheduleMovieShowings'>
      <header>Lên lịch chiếu phim</header>

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
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Danh sách các phim"
            onChange={handleChange}
            options={options}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Chọn phòng chiếu"
        >
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Danh sách phòng"
            onChange={handleChange}
            options={options}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Giờ chiếu"
          name="description"
        >
          <TimePicker
            onChange={onchange}
          />
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

export default ScheduleMovieShowings
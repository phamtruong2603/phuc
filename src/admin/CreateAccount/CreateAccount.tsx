import { Button, DatePicker, Form, Input } from 'antd';
import type { DatePickerProps } from 'antd';
import { useContext, useState } from 'react';
import { createAcount } from '../../apis/user';
import { MessageContextProvider } from '../../contexts/MessageContext';

type FieldType = {

};

// Email, Họ và tên, Ngày sinh, Địa chỉ, Điện thoại, Tên đăng nhập, Mật Khẩu
const CreateAccount = () => {
  const initialValues = {}
  const mess = useContext(MessageContextProvider)
  const success = mess?.success
  const error = mess?.error
 
  const [data, setData] = useState<any>()

  const onFinish = async (values: FieldType) => {
    const req = {
      ...data,
      ...values
    }
    const res = await createAcount(req)
    console.log(res)
    if(res?.code === 200) {
      success("Tạo thành công")
    }
    else{
      error(res?.msg)
    }
  };

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(dateString);
    setData({
      ...data,
      dateOfBirth: dateString
    })
  };

  return (
    <div className='MovieSchedule'>
      <header>Tạo mới tài khoản admin</header>
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
        label="Email"
        name="email"
      >
        <Input placeholder='' />
      </Form.Item>

      <Form.Item<FieldType>
        label="Họ và tên"
        name="fullname"
      >
        <Input placeholder='' />
      </Form.Item>

      <Form.Item<FieldType>
        label="Ngày sinh"
      >
        <DatePicker
          onChange={onChange}
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Địa chỉ"
        name="address"
      >
        <Input placeholder='' />
      </Form.Item>

      <Form.Item<FieldType>
        label="Điện thoại"
        name="phone"
      >
        <Input placeholder='' />
      </Form.Item>
      <Form.Item<FieldType>
        label="Tên đăng nhập"
        name="username"
      >
        <Input placeholder='' />
      </Form.Item>

      <Form.Item<FieldType>
        label="Mật Khẩu"
        name="password"

      >
        <Input placeholder='' />
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

export default CreateAccount
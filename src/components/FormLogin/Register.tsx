import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MessageContextProvider } from '../../contexts/MessageContext';
import { register } from '../../apis/auth';

interface IFormRegister {
    email: string | undefined
    password: string | undefined
    avatar: string,
    first_name: string,
    last_name: string,
    mobile: string,
    sex: string,
    cmnd: string,
    role: string,
    address: string,
}

const Register = () => {

    const message = useContext(MessageContextProvider);
    const success = message?.success

    const [data, setData] = useState<IFormRegister>({
        avatar: "",
        first_name: "",
        last_name: "",
        mobile: "",
        sex: "",
        cmnd: "",
        role: "user",
        address: "",
        email: undefined,
        password: undefined
    })
    const navigate = useNavigate()

    const submitFormLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await register(data)
        if (res?.status === "404") {
            success("Tài khoản đã tồn tại!!!")
        } else {
            success("Thành công!!!")
            navigate("/login")
        }
    };

    const changeInfor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const navigateHome = async (e: any) => {
        e.preventDefault();
        navigate('/')
    };

    return (
        <div className='Form'>
            <div>

                <div className='login-form'>
                    <h1 onClick={navigateHome}>LOGO</h1>
                    <form onSubmit={submitFormLogin}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                id='email'
                                type="email"
                                name='email'
                                placeholder='email@gmail.com'
                                onChange={changeInfor}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                id='password'
                                type="password"
                                name='password'
                                placeholder='******'
                                onChange={changeInfor}
                            />
                        </div>
                        <br />
                        <br />
                        <button>Đăng Ký</button>
                    </form>

                    <p>Bạn đã có tài khoản <Link to='/login'>Đăng Nhập</Link></p>
                </div>

                <div className='img-loginform'>
                    <img src={""} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Register
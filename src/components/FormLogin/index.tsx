import React, { useContext, useState } from 'react';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../apis/auth';

import { AuthContextProvider } from '../../contexts/AuthContext';
import { MessageContextProvider } from '../../contexts/MessageContext';

interface IFormLogin {
    username: string | undefined
    password: string | undefined
}

const Form = () => {
    const auth = useContext(AuthContextProvider);
    const message = useContext(MessageContextProvider);
    const setUserState = auth?.setUserState
    const success = message?.success

    const [data, setData] = useState<IFormLogin>({
        username: undefined,
        password: undefined
    })

    const navigate = useNavigate()
    const submitFormLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await login(data)
        if (res?.code === 200) {
            setUserState?.({
                isLogin: true,
                user: res.data,
                token: res.data.token
            })
            localStorage.setItem('token', res.data.token)
            success("Đăng nhập thành công")
            res.data.role.name === "SUPER_ADMIN" ?
                navigate('/super-admin/theater-list')
                :
                res.data.role.name === "ADMIN" ?
                    navigate('/admin')
                    :
                    navigate('/')
        }
    };

    const navigateHome = async (e: any) => {
        e.preventDefault();
        navigate('/')
    };

    const changeInfor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='Form'>
            <div>

                <div className='login-form'>
                    <h1 onClick={navigateHome}>LOGO</h1>
                    <form onSubmit={submitFormLogin}>
                        <div>
                            <label htmlFor="username">Tên đăng nhập:</label>
                            <input
                                id='username'
                                type="username"
                                name='username'
                                placeholder='username@gmail.com'
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
                        <span>Quên mật khẩu???</span>
                        <button>Đăng nhập</button>
                    </form>

                    <p>Bạn chưa có tài khoản <Link to='/register'>Đăng Ký</Link></p>
                </div>

                <div className='img-loginform'>
                    <img src={""} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Form
import './Header.css';
import { useNavigate } from 'react-router-dom';

import { AuthContextProvider } from '../../contexts/AuthContext';
import { useContext } from 'react';

const HeaderWeb = () => {
  const auth = useContext(AuthContextProvider)
  const user = auth?.userState
  const navigate = useNavigate();

  const navigateLoginForm = (e: any) => {
    e.preventDefault();
    navigate('/login')
  };

  return (
    <div className='header'>
      <div className='logo'>LOGO</div>
      <div className='header-right'>
        <div className='option_main'>
          
        </div>

        {user?.isLogin ?
          <div
            style={{ fontSize: '1.2rem', display: "flex", alignItems: 'center' }}
            className='auth'
          >

           <span>Lịch chiếu </span>
           <span>Phim chiếu</span>
           <span>Hồ sơ</span>
           
           <span> Xin chào {user.user?.username}</span>
            <span onClick={
              () => {
                auth?.logout()
                navigate('/login')
              }
            }>Logout</span>
          </div>
          :
          <div className='auth'>
            <span onClick={navigateLoginForm}>Đăng nhập</span>
            <span>Đăng ký</span>
          </div>
        }

      </div>
    </div>
  )
}

export default HeaderWeb
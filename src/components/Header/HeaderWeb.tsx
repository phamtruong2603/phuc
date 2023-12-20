import { useContext, useEffect, useState } from 'react';
import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DropdowHeader from './DropdowHeader';
import { AuthContextProvider } from '../../contexts/AuthContext';

const HeaderWeb = () => {

  const [urlCurrent, setUrlCurrent] = useState<string>('')
  const location = useLocation()

  const auth = useContext(AuthContextProvider)
  const user = auth?.userState
  const navigate = useNavigate();

  const navigateLoginForm = (e: any) => {
    e.preventDefault();
    navigate('/login')
  };

  useEffect(() => {
    const checkUrl = location.pathname.split("/")[1]
    setUrlCurrent(checkUrl)
  }, [location])

  return (
    <div className='header'>
      <div className='logo'>LOGO</div>
      <div className='header-right'>
        <div className='option_main'>

        </div>

        {!user?.isLogin ?
          <div
            style={{ fontSize: '1.2rem', display: "flex", alignItems: 'center' }}
            className='auth'
          >

            <Link to="/a" className={`${urlCurrent === "a" ? "bottomCurrent" : ""}`}><span>Lịch chiếu</span></Link>
            <Link to="/b" className={`${urlCurrent === "b" ? "bottomCurrent" : ""}`}><span>Phim chiếu</span></Link>
            <Link to="/c" className={`${urlCurrent === "c" ? "bottomCurrent" : ""}`}><span>Hồ sơ</span></Link>

            {/* <span> Xin chào {user.user?.username}</span> */}
            <p className='name_header'> Xin chào ABC</p>
            <DropdowHeader />
          </div>
          :
          <div className='auth'>
            <button onClick={navigateLoginForm}>Đăng nhập</button>
            <button>Đăng ký</button>
          </div>
        }

      </div>
    </div>
  )
}

export default HeaderWeb
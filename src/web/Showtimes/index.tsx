import React from 'react';
import './index.css';
import HeaderWeb from '../../components/Header/HeaderWeb';
import SideBar from './SideBar';

const Showtimes = () => {
  return (
    <div>
      <HeaderWeb />
      <div className='content-web Showtimes'>
        <div className='side_bar-Showtimes'>
          <SideBar />
        </div>

        <div className='content-Showtimes'>
          constent
        </div>
      </div>
    </div>
  )
}

export default Showtimes
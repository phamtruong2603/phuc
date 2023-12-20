import React from 'react';
import HeaderWeb from '../components/Header/HeaderWeb';
import Showtimes from './Showtimes';

const Web = () => {
  return (
    <div className='web'>
      <HeaderWeb />
      <div className='content-web' style={{paddingTop: "10vh"}}>
        <Showtimes />
      </div>
    </div>
  )
}

export default Web
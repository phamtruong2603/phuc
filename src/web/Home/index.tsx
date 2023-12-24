import React from 'react';
import './index.css';
import HeaderWeb from '../../components/Header/HeaderWeb';

const Web = () => {
  return (
    <div className='web'>
      <HeaderWeb />
      <div className='Home'>
        <div className='search-home'>
          <label htmlFor="">Phim bộ</label>
          <input type="text" id='' placeholder='Tìm kiếm tên phim bạn muốn xem' />
          <button>Tìm kiếm</button>
        </div>

        <div className='img-home'>
          <iframe
            width="100%" height="100%"
            src="https://www.youtube.com/embed/pFZ3-DlKv0Y?si=tcLhv3JNBjIL0CW-" title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Web
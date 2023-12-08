import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import NavigateNotFound from '../components/NotFound/NavigateNotFound';

import UploadImage from '../components/UploadImage/UploadImage';

const Web = () => {
  return (
    <div className='web'>
      <Header />

      <UploadImage />
      <Routes>
        <Route path="" element={<></>} />

        <Route path="/rooms" element={<></>} />
        <Route path="/rooms/:id" element={<></>} />

        <Route path="/attractions" element={<></>} />

        <Route path="/booked-room" element={<></>} />

        <Route path="/*" element={<NavigateNotFound />} />
      </Routes>
    </div>
  )
}

export default Web
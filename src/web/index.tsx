import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import NavigateNotFound from '../components/NotFound/NavigateNotFound';

const Web = () => {
  return (
    <div className='web'>
      <Header />
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
import React from 'react';
import Header from '../components/Header/Header';
import Siderbar from '../components/Siderbar/Siderbar';
import { Route, Routes } from 'react-router-dom';

import TheaterList from './TheaterList/TheaterList';
import AdminAccounts from './AdminAccounts/AdminAccounts';
import GuestAccounts from './GuestAccounts/GuestAccounts';
import CreateAccount from './CreateAccount/CreateAccount';
import CreateTheater from './CreateTheater/CreateTheater';

const Admin = () => {
  return (
    <div className='manager'>
      <Header />
      <div>
        <Siderbar />
        <div className="content">
          <Routes>
            <Route path="/theater-list" element={<TheaterList />} />
            <Route path="/admin-accounts" element={<AdminAccounts />} />
            <Route path="/guest-accounts" element={<GuestAccounts />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/create-theater" element={<CreateTheater />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Admin
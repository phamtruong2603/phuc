import React, { useEffect, useState } from 'react';
import TableAdminAccounts from '../../components/Table/TableAdminAccounts';
import { findAllAdminAccount } from '../../apis/user';

const AdminAccounts = () => {

  const [listAccount, setListAccount] = useState<any>()

  useEffect(() => {
    (async() => {
      const res = await findAllAdminAccount()
      console.log(res)
      if(res?.code === 200) {
        const newData = res.data.map((value: any, index: number) => {
          return({
            key: index,
            name: value.user.fullname,
            username: value.user.username,
            email: value.user.email,
            address: value.user.address,
            blocked: value.user.blocked,
            nameCinema: value.cinema.name

          })
        })
        setListAccount(newData)
      }
    })()
  }, [])

  return (
    <div>
        <TableAdminAccounts dataSource={listAccount} />
    </div>
  )
}

export default AdminAccounts
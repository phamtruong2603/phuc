import React, { useEffect, useState } from 'react';
import TableGuestAccounts from '../../components/Table/TableGuestAccounts';
import { findAllCustomersAccount } from '../../apis/user';

const GuestAccounts = () => {
  const [listAccount, setListAccount] = useState<any>()

  useEffect(() => {
    (async() => {
      const res = await findAllCustomersAccount()
      console.log(res)
      if(res?.code === 200) {
        const newData = res.data.map((value: any, index: number) => {
          return({
            key: index,
            ...value

          })
        })
        setListAccount(newData)
      }
    })()
  }, [])
  return (
    <div>
        <TableGuestAccounts dataSource={listAccount} />
    </div>
  )
}

export default GuestAccounts
import React, { useEffect, useState } from 'react'
import { adminServ } from '../../service/adminService'
import { headerUserTable } from './utils'
import { Space, Table, Tag } from 'antd';
import Spinner from '../../Components/Spinner/Spinner';

export default function AdminUserPage() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    adminServ.getUsersList()
      .then(response => {
        setUsers(response.data.content)
      })
      .catch(error => console.log("error :", error))
  }, [])
  return (
    <div>
      <Spinner />
      <Table columns={headerUserTable} dataSource={users} />;
    </div>
  )
}

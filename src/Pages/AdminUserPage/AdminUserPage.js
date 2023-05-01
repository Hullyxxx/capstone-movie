import React, { useEffect, useState } from 'react'
import { adminServ } from '../../service/adminService'
import { headerUserTable } from './utils'
import { Space, Table, Tag } from 'antd';
import Spinner from '../../Components/Spinner/Spinner';
import { useDispatch } from 'react-redux';
import { setLoadingOff, setLoadingOn } from '../../toolkit/spinnerSlice';

export default function AdminUserPage() {
  const [users, setUsers] = useState([])

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLoadingOn())
    adminServ.getUsersList()
      .then(response => {
        dispatch(setLoadingOff())
        setUsers(response.data.content)
      })
      .catch(error => {
        dispatch(setLoadingOff())
        console.log("error :", error)
      })
  }, [])
  return (
    <div>
      <Spinner />
      <Table columns={headerUserTable} dataSource={users} />;
    </div>
  )
}

import React from 'react'
import { localUserServ } from '../../service/localService'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function UserMenu() {

  let userInfo = useSelector((state) => {
    return state.userReducer.userInfo
  })

  let handleLogout = () => {
    localUserServ.remove()
    window.location.reload()
  }

  let renderContent = (userInfo) => {
    let buttonCss = 'px-5 py-2 border-black border-2 rounded'

    if (userInfo) {
      return <>
        <span>{userInfo.hoTen}</span>
        <button className={buttonCss} onClick={handleLogout}>Đăng xuất</button>
      </>
    } else {
      return <>
        <NavLink to='/login'>
          <button className={buttonCss}>Đăng nhập</button>
        </NavLink>
        <button className={buttonCss}>Đăng đăng ký</button>
      </>
    }
  }
  return (
    <div className='space-x-5'> {renderContent(userInfo)} </div>
  )
}

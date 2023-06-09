import React from 'react'
import UserMenu from '../UserMenu/UserMenu'
import { NavLink } from 'react-router-dom'

export default function HeaderDesktop() {
  return (
    <div className="h-20 shadow w-full">
      <div className="container mx-auto h-full flex items-center justify-between">
        <span className="font-medium text-2xl text-red-500 animate-pulse">
          <NavLink to={'/'}>CyberFlix</NavLink>
        </span>
        <UserMenu />
      </div>
    </div>
  )
}

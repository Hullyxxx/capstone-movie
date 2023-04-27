import React from 'react'
import { HashLoader } from 'react-spinners'

export default function Spinner() {
  return (
    <div 
    style={{background:'#FEE8B0'}}
    className='h-screen w-screen fixed top-0 left-0 flex justify-center items-center z-50'>
        <HashLoader color="#F97B22" />
    </div>
  )
}

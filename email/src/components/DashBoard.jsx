import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function DashBoard() {
  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default DashBoard

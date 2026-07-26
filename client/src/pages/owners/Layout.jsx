import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/owner/Sidebar'
import NavbarOwner from '../../components/owner/NavbarOwner'

const Layout = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <NavbarOwner />
      <div className='flex'>
        <Sidebar />
        <main className='flex-1'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
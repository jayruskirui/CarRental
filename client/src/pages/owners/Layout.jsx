import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/owner/Sidebar'
import NavbarOwner from '../../components/owner/NavbarOwner'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {

  const {isOwner,navigate} = useAppContext()

  useEffect(()=>{
    if(!isOwner) {
      navigate('/')
    }
  },[isOwner])

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
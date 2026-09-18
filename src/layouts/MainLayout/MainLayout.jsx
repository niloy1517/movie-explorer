import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='bg-[#161616]'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout
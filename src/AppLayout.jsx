import React from 'react'
import { Navbar } from './Components/Navbar'
import { Outlet,useNavigation } from 'react-router-dom'
const AppLayout = () => {
  return (
    <>
    <div className='h-content min-h-screen w-screen bg-gradient-to-r from-cyan-800 '>
       
    <Navbar/>
    <Outlet/>
    </div>
    </>
  )
}
export default AppLayout
import React from 'react'
import { Navbar } from './Components/Navbar'
import { Outlet} from 'react-router-dom'
import Theme from './pages/Theme'
const AppLayout = () => {
  return (
    <>
    <div className='h-content min-h-screen '>
       
    <Navbar/>
    <Theme/>
    <Outlet/>
    </div>
    </>
  )
}
export default AppLayout
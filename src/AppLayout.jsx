import React from 'react'
import { Navbar } from './Components/Navbar'
import { Outlet} from 'react-router-dom'
import Theme from './pages/Theme'
const AppLayout = () => {
  return (
    <>
    <div className='h-content min-h-screen  '>
      {/* <Theme/> */}
      <div className='flex flex-col'> 
     
       <div className=''>
      <div className='fiixed'><Navbar/></div>
    
    <div className='mt-10 text-black flex justify-center font-extrabold' >Made with 💕💕 by Anurag Bhandari</div>
    </div>
  
    <div className=''>
     
    <Outlet/>
    </div>
    </div>
    </div>
    </>
  )
}
export default AppLayout

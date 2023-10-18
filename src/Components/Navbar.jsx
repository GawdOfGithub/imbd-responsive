import React from 'react'
 import MenuIcon from '@mui/icons-material/Menu';
 import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
 import { useMainContext } from '../Contexts/MainContext';
 
export const Navbar = () => {
  const {sideBar,setSidebar,searchMode,setSearchMode} = useMainContext()
  return (
    <div className='w-full  bg-cyan-700 flex min-h-fit justify-between border-b-6'>
    <div className='text-2xl'>
  <button onClick={()=>setSidebar(!sideBar)}><MenuIcon/></button>
  </div>
  <div>
    <button className='bg-yellow-500 text-black font-bold p-5 rounded-3xl '>IMDb</button>
  </div>
  <button className='px-10 rounded-3xl' onClick={()=> setSearchMode(true)}><SearchOutlinedIcon/></button>
  <button className='px-5 rounded-3xl'>Sign In</button>
  
  </div>

    

  )
}

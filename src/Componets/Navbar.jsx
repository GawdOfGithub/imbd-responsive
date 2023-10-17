import React from 'react'
 import MenuIcon from '@mui/icons-material/Menu';
 import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
 import { useMainContext } from '../Contexts/MainContext';
 
export const Navbar = () => {
  const {sideBar,setSidebar,searchMode,setSearchMode} = useMainContext()
  return (
    <div className='w-full  bg-gradient-to-r from-sky-500 to-indigo-500 flex min-h-fit justify-between border-b-6'>
    <div className='text-2xl'>
  <button onClick={()=>setSidebar(!sideBar)}><MenuIcon/></button>
  </div>
  <div>
    <button className='bg-yellow-500 text-black font-bold p-2'>IMDb</button>
  </div>
  <button onClick={()=> setSearchMode(true)}><SearchOutlinedIcon/></button>
  <button>Sign In</button>
  <button>About</button>
  </div>

    

  )
}

import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useMainContext } from '../Contexts/MainContext';
import { Sidebar } from './Sidebar';
import { SearchBar } from './SearchBar';

export const Navbar = () => {
  const { sideBar, setSidebar, searchMode, setSearchMode } = useMainContext();

  return (
    <>
    { (!searchMode) ?
    (
    
    <div className='fixed w-full  bg-black flex min-h-fit justify-between '>
        {sideBar && !searchMode ? <Sidebar /> : null}
      <div className='text-2xl'>
        <button className='bg-black' onClick={() => setSidebar(!sideBar)}>
          <MenuIcon />
        </button>
      </div>
      <div>
        <button className='bg-yellow-500 text-black font-bold p-1 mt-4 px-4'>IMDb</button>
      </div>
      <button className="bg-black"onClick={() => setSearchMode(true)}>
        <SearchOutlinedIcon />
      </button>
      <button className='bg-black'>Sign In</button>
     

    
     
    
    </div>):<SearchBar/>}
    </>
  );
};

import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useMainContext } from '../Contexts/MainContext';
import { Sidebar } from './Sidebar';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  const { sideBar, setSidebar, searchMode, setSearchMode } = useMainContext();
  

  return (
    <>
    { (!searchMode) ?
    (
    
    <div className='fixed w-full  bg-black flex min-h-content justify-between text-white'>
        {sideBar && !searchMode ? <Sidebar /> : null}
      <div className='text-2xl'>
        <Link className='bg-black text-white mt-{-1}' onClick={() => setSidebar(!sideBar)}>
          <MenuIcon />
        </Link>
      </div>
      <div>
        <Link className='bg-yellow-500 text-black font-bold p-1 mt-4 px-4'>IMDb</Link>
      </div>
      <Link className="bg-black text-white"onClick={() => setSearchMode(true)}>
        <SearchOutlinedIcon />
      </Link>
      <Link to="/signIn" className='bg-black text-white' >Sign In</Link>
     

    
     
    
    </div>):<SearchBar/>}
    </>
  );
};

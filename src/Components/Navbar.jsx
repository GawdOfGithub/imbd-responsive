import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useMainContext } from '../Contexts/MainContext';
import { Sidebar } from './Sidebar';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import Person4Icon from '@mui/icons-material/Person4';

export const Navbar = () => {
  const {user_is_logged_in,logout,useAuthState} = useAuth()
  const { sideBar, setSidebar, searchMode, setSearchMode } = useMainContext();
  

  return (
    <>
    { (!searchMode) ?
    (
    
    <div className='fixed w-full  bg-black flex min-h-content justify-between text-white'>
        {sideBar && !searchMode ? <Sidebar /> : null}
      <div className='text-2xl'>
        <Link className='bg-black text-white ' onClick={() => setSidebar(!sideBar)}>
          <MenuIcon />
        </Link>
      </div>
      <div>
        <Link className='bg-yellow-500 text-black font-bold p-1 mt-4 px-4'>IMDb</Link>
      </div>
      <Link className="bg-black text-white"onClick={() => setSearchMode(true)}>
        <SearchOutlinedIcon />
      </Link>

      {
        user_is_logged_in?
      (<button  className='bg-black text-white mr-4'  onClick={logout}>{<Person4Icon/>}Logout</button>):
      (<Link to="/signIn" className='bg-black text-white mr-4' >SignIn</Link>)
      }

    
     
    
    </div>):<SearchBar/>}
    </>
  );
};

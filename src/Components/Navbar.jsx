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
  const { user_is_logged_in, logout, useAuthState, user } = useAuth();
  const { sideBar, setSidebar, searchMode, setSearchMode } = useMainContext();

  return (
    <div className="fixed w-full bg-black min-h-content text-white">
      {(!searchMode) ? (
        <>
          {sideBar && !searchMode ? <Sidebar /> : null}
          <div className="flex justify-between items-center px-4 py-2">
            <div className="text-2xl">
              <button
                className="bg-black text-white"
                onClick={() => setSidebar(!sideBar)}
              >
                <MenuIcon />
              </button>
            </div>
            <Link to="/" className="text-yellow-500 text-2xl font-bold">
              IMDb
            </Link>
            <button
              className="bg-black text-white"
              onClick={() => setSearchMode(true)}
            >
             <Link to="/"><SearchOutlinedIcon /></Link>
            </button>
            {user ? (
              <button
                className="bg-black text-white flex items-center mr-4"
                onClick={logout}
              >
                <Person4Icon className="mr-1" />
                Logout
              </button>
            ) : (
              <Link to="/signIn" className="bg-black text-white mr-4">
                SignIn
              </Link>
            )}
          </div>
        </>
      ) : (
        <SearchBar />
      )}
    </div>
  );
};

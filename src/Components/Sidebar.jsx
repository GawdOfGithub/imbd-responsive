import React from 'react';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import InfoIcon from '@mui/icons-material/Info';
import ClearIcon from '@mui/icons-material/Clear';
import { useMainContext } from '../Contexts/MainContext';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const { sideBar, setSidebar } = useMainContext();
  
function handleSideBar()
{
  setSidebar((sideBar)=>!sideBar)
}
  return (
    <>
      {sideBar ? (
        <div className='h-screen w-4/5 bg-black  flex flex-col divide-y divide-lime-50 absolute '>
          <button className='border-b border-solid border-gray-500 text-extrabold' onClick={() => setSidebar(!sideBar)}>
            <ClearIcon />
          </button>
          <Link to="/" className='border-b border-solid border-gray-500 text-extrabold'onClick={handleSideBar}>
            <LiveTvIcon />Watch list😎😎
          </Link>
          <Link className='border-b border-solid border-gray-500 text-extrabold'onClick={handleSideBar}>
            <InfoIcon />About us🎃🎃
          </Link>
          <Link to="/topRatedMovies"className='border-b border-solid border-gray-500 text-extrabold'onClick={handleSideBar}>
            TopRatedMovies
          </Link>
          <Link to='/upcomingMovies' className='border-b border-solid border-gray-500 text-extrabold'onClick={handleSideBar}>Upcoming Movies</Link>
          <Link to='/popularMovies' className='border-b border-solid border-gray-500 text-extrabold'onClick={handleSideBar}>Popular Movies</Link>
          <Link to='/nowPlayingMovies' className='border-b border-solid border-gray-500 text-extrabold'onClick={handleSideBar}>NowPlayingMovies</Link>
        </div>
      ) : null}
    </>

  );
};

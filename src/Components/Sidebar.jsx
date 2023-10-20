import React from 'react';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import InfoIcon from '@mui/icons-material/Info';
import ClearIcon from '@mui/icons-material/Clear';
import { useMainContext } from '../Contexts/MainContext';
import { Link } from 'react-router-dom';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SignIn from '../pages/Theme';
export const Sidebar = () => {
  const { sideBar, setSidebar } = useMainContext();
  
function handleSideBar()
{
  setSidebar((sideBar)=>!sideBar)
}
  return (
    <>          
      {sideBar ? (
        <div className='h-screen w-4/5 bg-black  flex flex-col divide-y divide-lime-50 absolute  '>
          <button className='border-b border-solid border-gray-500 text-extrabold text-white  mt-3 ' onClick={() => setSidebar(!sideBar)}>
            <ClearIcon />
          </button>
          <Link to="/" className='border-b border-solid border-gray-500 text-extrabold text-white  mt-3'onClick={handleSideBar}>
            <LiveTvIcon />Watch list😎😎
          </Link>
          <Link className='border-b border-solid border-gray-500 text-extrabold text-white mt-3'onClick={handleSideBar}>
            <InfoIcon />About us🎃🎃
          </Link>
          <Link to="/topRatedMovies"className='border-b border-solid border-gray-500 text-extrabold text-white mt-3 'onClick={handleSideBar}>
          <MovieCreationIcon/>  TopRatedMovies
          </Link>
          <Link to='/upcomingMovies' className='border-b border-solid border-gray-500 text-extrabold text-white mt-3  'onClick={handleSideBar}><MovieCreationIcon/>Upcoming Movies</Link>
          <Link to='/popularMovies' className='border-b border-solid border-gray-500 text-extrabold  text-white mt-3'onClick={handleSideBar}><MovieCreationIcon/>Popular Movies</Link>
          <Link to='/nowPlayingMovies' className='border-b border-solid border-gray-500 text-extrabold text-white mt-3 'onClick={handleSideBar}><MovieCreationIcon/>NowPlayingMovies</Link>
        </div>
      ) : null}
    </>

  );
};

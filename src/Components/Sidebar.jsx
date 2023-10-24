import React from 'react';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import InfoIcon from '@mui/icons-material/Info';
import ClearIcon from '@mui/icons-material/Clear';
import { useMainContext } from '../Contexts/MainContext';
import { Link } from 'react-router-dom';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

export const Sidebar = () => {
  const { sideBar, setSidebar } = useMainContext();

  function handleSideBar() {
    setSidebar((sideBar) => !sideBar);
  }

  return (
    <>
      {sideBar ? (
        <div className="h-screen w-4/5 bg-black flex flex-col absolute">
          <button
            className="border-b border-solid border-gray-500 text-extrabold text-white mt-3 p-2"
            onClick={() => setSidebar(!sideBar)}
          >
            <ClearIcon />
          </button>
          <Link
            to="/watchList"
            className="border-b border-solid border-gray-500 text-extrabold text-white mt-3 p-2"
            onClick={handleSideBar}
          >
            <LiveTvIcon className="mr-2" /> Watchlist 😎😎
          </Link>
          <Link
            className="border-b border-solid border-gray-500 text-extrabold text-white mt-3 p-2"
            onClick={handleSideBar}
          >
            <InfoIcon className="mr-2" /> About us 🎃🎃
          </Link>
          <Link
            to="/topRatedMovies"
            className="border-b border-solid border-gray-500 text-extrabold text-white mt-3 p-2"
            onClick={handleSideBar}
          >
            <MovieCreationIcon className="mr-2" /> Top Rated Movies
          </Link>
          <Link
            to="/upcomingMovies"
            className="border-b border-solid border-gray-500 text-extrabold text-white mt-3 p-2"
            onClick={handleSideBar}
          >
            <MovieCreationIcon className="mr-2" /> Upcoming Movies
          </Link>
          <Link
            to="/popularMovies"
            className="border-b border-solid border-gray-500 text-extrabold text-white mt-3 p-2"
            onClick={handleSideBar}
          >
            <MovieCreationIcon className="mr-2" /> Popular Movies
          </Link>
          <Link
            to="/nowPlayingMovies"
            className="border-b border-solid border-gray-500 text-extrabold text-white mt-3 p-2"
            onClick={handleSideBar}
          >
            <MovieCreationIcon className="mr-2" /> Now Playing Movies
          </Link>
        </div>
      ) : null}
    </>
  );
};

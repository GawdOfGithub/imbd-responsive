import React, { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { Link } from 'react-router-dom';
import { RealWatchList } from '../Components/RealWatchList';



export default function WatchList() {
  const {user,emptyWatchlist} = useAuth()
 
  
  
 
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        {!user ? (
          <div className="max-w-lg mx-auto">
            <video className="w-50 ml-28 h-auto object-cover" src="MovieAnimation.webm" autoPlay loop controls>
              Your browser does not support the video tag.
            </video>
            <Link to="/signin" className="block text-red-600 font-extrabold mt-4 text-xl z-50   ">Sign In</Link>
            <p className="text-black font-extrabold text-xl mt-2">
              To start adding movies to your watchlist
            </p>
            <div className="text-5xl mt-4">🍿</div>
          </div>
        ) : (
          emptyWatchlist?


          
          (<div>
            <img src="variant1.png" alt="Empty Watchlist" className="mx-auto max-w-lg" />
            <p className="text-black font-extrabold text-xl text-center mt-4">
              Your watchlist is empty, {user.dispayName}.
            </p>
          </div>):<RealWatchList/>
        )}
      </div>
    </div>
  );
}

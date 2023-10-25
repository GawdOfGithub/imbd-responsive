import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useMainContext } from '../Contexts/MainContext';
import { useState } from 'react';
import { Loader } from './Loader';
import { useAuth } from '../Contexts/AuthContext';
import app from '../firebase';
export const RealWatchList = () => {
  
  
  const url = `https://api.themoviedb.org/3/movie/447404`;
  const url2 =  `https://api.themoviedb.org/3/movie/605`;
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  const alternative = 'https://image.tmdb.org/t/p/w500/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg';

  const [watchData, setWatchData] = useState()
  const { data, loading } = useFetch(watchData, url);
  const [isloading, setIsLoading] = useState(true);

 console.log(watchData)

 

  useEffect(() => {
    const fetchData = async () => {
      if (data ) {
      try {
     
          console.log(data);
          setWatchData(data);
          setIsLoading(loading);
        } 
        catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
          
        
      } 
    };
    fetchData();
  }, [watchData,loading, isloading,data]);

  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
          
            <div className="bg-white rounded-lg shadow-lg p-4">
               <img
                src={ data.backdrop_path ? imageUrl + data.backdrop_path : alternative}
                alt="image"
                className="w-full h-48 object-cover rounded-md"
              /> 
              <div className="mt-4">
                <div className="text-xl font-extrabold text-black">{data.original_title}</div>
                <div className="text-gray-600">Released: {data.release_date}</div>
                <div className="text-yellow-500">🌟 {data.popularity}</div>
                <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none" onClick= {()=>handleRemovalLocal(data.id)}>
                Remove from WatchList
                </button>
                <div className='text-black font-bold mt-3'>{data.overview}</div>
               
              </div>
            </div>
          
        </div>
      )}
    </>
  )
}
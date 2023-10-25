import React, { useEffect, useState } from 'react';
import { Loader } from '../Components/Loader';
import useFetch from '../hooks/useFetch';
import { useAuth } from '../Contexts/AuthContext';
export default function NowPlayingMovies() {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  const [nowPlayingMovieData, setNowPlayingMoviesData] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(true);
  const { data, loading } = useFetch(nowPlayingMovieData, url);
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  const alternative = 'https://image.tmdb.org/t/p/w500/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg';
  const {handleUpdate} = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data) {
          setNowPlayingMoviesData(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(loading);
      }
    };
    fetchData();
  }, [data, nowPlayingMovieData, isLoading]);

  const handleUpdateLocal = async (id)=>
  { 
   try{
    await handleUpdate(id)
   }
   catch(error)
   {
     console.log(error);
 
   }
 
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {nowPlayingMovieData.results.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={item.backdrop_path ? imageUrl + item.backdrop_path : alternative}
                alt="image"
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <div className="text-xl font-extrabold text-black">{item.original_title}</div>
                <div className="text-gray-600">Released: {item.release_date}</div>
                <div className="text-yellow-500">🌟 {item.popularity}</div>
                <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none"onClick= {()=>handleUpdateLocal(item.id)}>
                  Add to Watchlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

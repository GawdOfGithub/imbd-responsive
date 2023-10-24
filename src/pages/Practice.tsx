import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useMainContext } from '../Contexts/MainContext';
import { useState } from 'react';


export const Practise = () => {
  const { search } = useMainContext();
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}`;
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  const alternative = 'https://image.tmdb.org/t/p/w500/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg';
  const { data, loading } = useFetch(null, url);
  const [searchData, setSearchData] = useState({ results: [] });
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data && search !== '') {
          setSearchData(data);
          setIsLoading(loading);
        } else {
          setSearchData({ results: [] });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchData, search, loading, isloading]);

  return (
    <>
      {isloading ? (
    (null)
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
          {searchData.results.map((item, index) => (
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
                <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none">
                  Add to Watchlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

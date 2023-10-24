import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useMainContext } from '../Contexts/MainContext';
import { useState } from 'react';
import { Loader } from './Loader';

export const MovieList = () => {
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
      <div>
        {searchData.results.map((result, index) => (
          <div key={index} className='text-black'>
            {JSON.stringify(result)}
          </div>
        ))}
      </div>
    </>
  );
};

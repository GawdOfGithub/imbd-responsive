import React, { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { useAuth } from '../Contexts/AuthContext';

// Define a custom function to perform the fetch
async function fetchData(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGYzYTA7IzJkMDBhZGE3ZTgwNiIsInN1YiI6IjY1MmU1MjhjY2FlZjJkMDBhZGE3ZTgwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8CFMecPEGw0cyJcWBiw-XdKEqsfd3tzo6pIxCnxlHHQ' // Replace with your API key
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const RealWatchList = () => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500';
  const alternative = 'https://image.tmdb.org/t/p/w500/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg'; // Define 'alternative' variable

  const bigData = [44704, 605];
  const [bigWatchData, setBigWatchData] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth(); // Assuming you have an AuthContext

  useEffect(() => {
    setIsLoading(true);

    const newArray = bigData.map(item => `https://api.themoviedb.org/3/movie/${item}`);
    console.log(newArray);

    const fetchDataForArray = async () => {
      const results = [];

      for (const url of newArray) {
        const data = await fetchData(url);
        if (data) {
          results.push(data);
        }
      }

      setBigWatchData({ results });
      setIsLoading(false);
    };

    fetchDataForArray();
  }, []); // Empty dependency array to run the effect once

  useEffect(() => {
    console.log(bigWatchData); // Log the updated bigWatchData
  }, [bigWatchData]); // Add a new useEffect to observe changes in bigWatchData

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {/* Render the data from bigWatchData.results */}
          {bigWatchData.results.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <img src={`${imageUrl}${item.poster_path || alternative}`} alt={item.title} className="w-full h-48 object-cover rounded-md" />
              <div className="mt-4">
                <div className="text-xl font-extrabold text-black">{item.title}</div>
                <div className="text-gray-600">Released: {item.release_date}</div>
                <div className="text-yellow-500">🌟 {item.popularity}</div>
                <div className="text-black font-bold">{item.overview}</div>
                
            
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGYzYTA3N2FlMDg4Yzc3Zjg2ZjQ3YWVmMDk0MjE4ZiIsInN1YiI6IjY1MmU1MjhjY2FlZjJkMDBhZGE3ZTgwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8CFMecPEGw0cyJcWBiw-XdKEqsfd3tzo6pIxCnxlHHQ'// Replace with your API key
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
        <div>
          {/* Render the data from bigWatchData.results */}
          {bigWatchData.results.map((item, index) => (
            <div key={index}>
              <img src={`${imageUrl}${item.poster_path || alternative}`} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

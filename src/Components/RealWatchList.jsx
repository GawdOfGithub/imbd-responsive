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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGYzYTA3N2FlMDg4Yzc3Zjg2ZjQ3YWVmMDk0MjE4ZiIsInN1YiI6IjY1MmU1MjhjY2FlZjJkMDBhZGE3ZTgwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8CFMecPEGw0cyJcWBiw-XdKEqsfd3tzo6pIxCnxlHHQ', // Replace with your API key
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
  const { getUserDocRef, user, getDoc } = useAuth();
  const imageUrl = 'https://image.tmdb.org/t/p/w500';
  const alternative = 'https://image.tmdb.org/t/p/w500/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg';

  const [bigData, setBigData] = useState([]);
  const [bigWatchData, setBigWatchData] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLord = async () => {
      try {
        if (user) {
          const userDocRef = getUserDocRef(user);
          const userDocSnapshot = await getDoc(userDocRef);
          const userData = userDocSnapshot.data();
          
          if (userData && userData.ids) {
            setBigData(userData.ids);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getLord();
  }, [user, getUserDocRef, getDoc]);

  useEffect(() => {
    const fetchDataForArray = async () => {
      setIsLoading(true);
      const results = [];

      for (const movieId of bigData) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}`; // Replace with your API key
        const data = await fetchData(url);

        if (data) {
          results.push(data);
        }
      }

      setBigWatchData({ results });
      setIsLoading(false);
    };

    if (bigData.length > 0) {
      fetchDataForArray();
    }
  }, [bigData]);

  useEffect(() => {
    console.log(bigWatchData);
  }, [bigWatchData]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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

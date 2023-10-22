import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch'; // Assuming your custom hook is in a file named useFetch.js
import { useMainContext } from '../Contexts/MainContext';
const Hero = () => {
  const {search}= useMainContext()
  const url = 'https://api.themoviedb.org/3/movie/157336?api_key=34f3a077ae088c77f86f47aef094218f&append_to_response=images'
  const searchUrl ='https://api.themoviedb.org/3/search/movie?query=avtaar&include_adult=true&language=en-US&page=1'
  const movieUrl = "https://image.tmdb.org/t/p/w500/"
  const getMovie =` https://api.themoviedb.org/3/search/movie?query=${search}`
  const { data, loading} = useFetch(null, getMovie);

  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data)
        {
    
        setMovieData(data);
        setIsLoading(loading);
      
       
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally{
        console.log(movieData)
      }
    };

    fetchData();
  }, [url,data,movieData]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
         
          {/* <img src={movieUrl + movieData.images.backdrops[0].file_path} alt="image"></img>  */}
           
          
          <h2>Data from API:</h2>
          

          <pre>{JSON.stringify(movieData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Hero;




import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch'; // Assuming your custom hook is in a file named useFetch.js

const Hero = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const { data, loading } = useFetch(null, url);

  const [isLoading, setIsLoading] = useState(true);
  const [todoData, setTodoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
    
        setTodoData(data);
        setIsLoading(loading);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Data from API:</h2>
          <h3>{todoData.id}</h3>
          <pre>{JSON.stringify(todoData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Hero;

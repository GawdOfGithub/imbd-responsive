import React from 'react';
import { MovieList } from '../Components/MovieList';
import { useAuth } from '../Contexts/AuthContext';

export default function Home() {
  const { search } = useAuth(); // Using the context

  return (
    <>
      <div className='h-content min-h-screen w-screen'>
        {search == '' && (
          <div className='text-black'>Hello </div>
        )}

        <MovieList />
      </div>
    </>
  );
}

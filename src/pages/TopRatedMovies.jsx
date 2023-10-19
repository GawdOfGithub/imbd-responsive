import React, { useEffect, useState } from 'react'

import useFetch from '../hooks/useFetch'
export default function TopRatedMovies() {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
    const[topRatedMovieData,setPopularMoviesData] = useState({ results: []})
    const[isLoading,setIsLoading] = useState(false)
    const{data,loading,options} = useFetch(topRatedMovieData,url)
    const imageUrl = "https://image.tmdb.org/t/p/w500/"
    const alternative = "https://image.tmdb.org/t/p/w500/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg"
    useEffect(()=>
    {
        const fetchData = async()=>
        {
            try{
        if(data)
        {
            console.log(data)
            setPopularMoviesData(data)
        }

        }
    
    catch(error)
    {
        console.log(error)
    }
    finally
    {
        setIsLoading(loading)
    }
    } 
    fetchData()}, [data,topRatedMovieData]
    )
    return (
        <>
        {isLoading ?(<p>Loading..</p>) :(topRatedMovieData.results.map((item,index)=>
        
        (
        <div key={index}>
        <div className='flex divide-y-4'>
            <div className='mr-4'>
            <img src={item.backdrop_path ?imageUrl+item.backdrop_path:alternative} alt="image" style={{height:100}}></img>
            
            </div>
            <div className= "flex flex-col ">
                <div className='text-extrabold '>{item.original_title}</div>
                <div className=''>Released-{item.release_date}</div>
                <div className=''>🌟-{item.popularity}</div>
     
            </div>
        </div>
       
        </div>)))}
        </>
      )
}

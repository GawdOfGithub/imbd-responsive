import React, { useEffect, useState } from 'react'
import { Loader } from '../Components/Loader'
import useFetch from '../hooks/useFetch'
export default function PopularMovies() {
    const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
    const[popularMovieData,setPopularMoviesData] = useState({ results: []})
    const[isLoading,setIsLoading] = useState(true)
    const{data,loading} = useFetch(popularMovieData,url)
    const imageUrl = "https://image.tmdb.org/t/p/w500/"
    const alternative = "https://image.tmdb.org/t/p/w500/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg"
    useEffect(()=>
    {
        const fetchData = async()=>
        {
            try{
            
        if(data)
        {
            
            console.log(isLoading)
            
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
        console.log(isLoading)
    }
    } 
    fetchData()}, [data,popularMovieData,isLoading]
    )
    return (
        <>
        {isLoading ?(<Loader/>) :(popularMovieData.results.map((item,index)=>
        
        (
        <div key={index}>
        <div className='flex divide-y-4'>
            <div className='mr-4'>
            <img src={item.backdrop_path ?imageUrl+item.backdrop_path:alternative} alt="image" style={{height:100}}></img>
            
            </div>
            <div className= "flex flex-col ">
            <div className='text-extrabold text-black'>{item.original_title}</div>
                <div className='text-black'>Released-{item.release_date}</div>
                <div className='text-black'>🌟-{item.popularity}</div>
                <button className='p-0 mt-2 hover:bg-black'>Add to WatchList</button>
     
            </div>
        </div>
       
        </div>)))}
        </>
      )
}

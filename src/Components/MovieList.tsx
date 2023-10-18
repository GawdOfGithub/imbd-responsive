import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useMainContext } from '../Contexts/MainContext'
import { useState } from 'react'
export const MovieList = () => {
    const {search} = useMainContext()
    const url = ` https://api.themoviedb.org/3/search/movie?query=${search}`
    const imageUrl = "https://image.tmdb.org/t/p/w500/"
    const alternative = "https://image.tmdb.org/t/p/w500/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg"
    const {data,loading} = useFetch(null,url)
     const[searchData,setSearchData] = useState({ results: []})
     const[isloading,setIsLoading] = useState(false)
    useEffect(()=>
    {
        const fetchData = async()=>
        {
            try
            {
                if(data)
                {
                    
                    setSearchData(data)
                    console.log(searchData.results[0])
                    setIsLoading(loading);
                }
            }
            catch(error){
             console.log(error)
            }
            finally
            {
                setIsLoading(false)
            }
        }
        fetchData();
    },[searchData,search])
  return (
    <>
    {isloading ?(<p>Loading..</p>) :(searchData.results.map((item,index)=>
    
    (
    <div key={index}>
    <div className='flex divide-y-4'>
        <div className='mr-4'>
        <img src={item.backdrop_path ?imageUrl+item.backdrop_path:alternative} alt="image"></img>
        
        </div>
        <div className= "flex flex-col ">
            <div className='text-extrabold '>{item.original_title}</div>
            <div className=''>Released-{item.release_date}</div>
            <div className=''>🌟-{item.popularity}</div>
 
        </div>fsffsf
    </div>
   
    </div>)))}
    </>
  )
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   


    
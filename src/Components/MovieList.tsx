import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useMainContext } from '../Contexts/MainContext'
import { useState } from 'react'
import { Loader } from './Loader'
export const MovieList = () => {
    const {search} = useMainContext()
    const url = ` https://api.themoviedb.org/3/search/movie?query=${search}`
    const imageUrl = "https://image.tmdb.org/t/p/w500/"
    const alternative = "https://image.tmdb.org/t/p/w500/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg"
    const {data,loading} = useFetch(null,url)
     const[searchData,setSearchData] = useState({ results: []})
     const[isloading,setIsLoading] = useState(true)
    useEffect(()=>
    {
        const fetchData = async()=>
        {
            try
            {
                if((data) && (search!==""))
                {
                    
                    setSearchData(data)
                    console.log(searchData.results[0])
                    setIsLoading(loading);
                }
                else
                {
                    setSearchData({ results: [] })
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

        
            
        
    }
    
    ,[searchData,search,loading,isloading])
  return (
    <>
    {isloading ?(<Loader/>) :(searchData.results.map((item,index)=>
    
    (
    <div key={index}>
    <div className='flex  '>
        <div className='mr-4'>
        <img src={item.backdrop_path ?imageUrl+item.backdrop_path:alternative} alt="image" style={{height:100}}></img>
        
        </div>
        <div className= "flex flex-col ">
            <div className='text-extrabold '>{item.original_title}</div>
            <div className=''>Released-{item.release_date}</div>
            <div className=''>🌟-{item.popularity}</div>
            <div className='mb-6 '></div>
            <hr/>
 
        </div>
        
    </div>
   
    </div>)))}
    </>
  )
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   


    
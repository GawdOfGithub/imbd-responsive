import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useMainContext } from '../Contexts/MainContext'
import { useState } from 'react'
export const MovieList = () => {
    const {search} = useMainContext()
    const url = ` https://api.themoviedb.org/3/search/movie?query=${search}`
    const imageUrl = "https://image.tmdb.org/t/p/w500/"

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
                }
            }
            catch(error){
             console.log(error)
            }
            finally
            {
                setIsLoading(loading)
            }
        }
        fetchData();
    },[searchData,search])
  return (
    <>
    {isLoading ? (<p>Loading</p>):({searchData.results.map((item)=>
    
    (
    <div>
    <div className='flex'>
        <div className='mr-4'>
        <img src={imageUrl+item.backdrop_path} alt="image"></img>
        {/*  */}
        </div>
        <div className= "flex flex-col">
            <div className='text-extrabold '>{item.original_title}</div>
            <div className=''>{item.release_date}</div>
            <div className=''>{item.popularity}</div>
 
        </div>
    </div>
    <pre>{JSON.stringify(searchData, null, 2)}</pre>
    </div>))})}
    </>
  )
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   


    
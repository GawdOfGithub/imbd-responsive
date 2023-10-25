
import React from 'react'
import { MovieList } from '../Components/MovieList'
import Theme2 from '../Components/Theme2'
import { useMainContext } from '../Contexts/MainContext'
import Theme from './Theme'

export default function Home () {
  const {search} = useMainContext()
   
  
 
 return(
  <>

<div className='h-content min-h-screen w-screen '>
   
   {search=="" ? (<div className='text-black flex flex-col items-center justify-center'>Hello</div>): <Theme/>}
 
  <MovieList/>
  
</div> 
  </>
 )
}

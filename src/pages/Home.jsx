import React from 'react'

import { MovieList } from '../Components/MovieList'


export default function Home () {
 return(
  <>
<div className='h-content min-h-screen w-screen bg-gradient-to-r from-cyan-800 '> 
  <MovieList/>
</div> 
  </>
 )
}




import { Sidebar } from '../Components/Sidebar'
import { useMainContext } from '../Contexts/MainContext'
import { SearchBar } from '../Components/SearchBar'
import { Navbar } from '../Components/Navbar'
import { MovieList } from '../Components/MovieList'
import { Tester } from '../Components/Tester'

export default function Home () {
 const {sideBar,setSidebar,searchMode,setSearchMode} = useMainContext()     //using the context
  
 
 return(
  <>

<div className='h-content min-h-screen w-screen bg-gradient-to-r from-cyan-800  '>
  
 
  <MovieList/>
  
</div> 
  </>
 )
}










    
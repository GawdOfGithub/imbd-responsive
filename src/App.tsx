

import './App.css'
import { Navbar } from './Components/Navbar'
import { Sidebar } from './Components/Sidebar'
import { useMainContext } from './Contexts/MainContext'
import { SearchBar } from './Components/SearchBar'
import Hero from './Components/Hero'
import { MovieList } from './Components/MovieList'
export default function App () {
 const {sideBar,setSidebar,searchMode,setSearchMode} = useMainContext()     //using the context
  
  return (
    <>
   <div className='h-content min-h-screen w-screen bg-gradient-to-r from-cyan-500  '>
     
   {(searchMode) && <SearchBar/>}
    { !(searchMode) && <Navbar/> }
   { (sideBar) && <Sidebar/>}
   <MovieList/>
   {/* <Hero/>  */}
    </div>
    </>
  )
}


//const url =
//'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=34f3a077ae088c77f86f47aef094218f';
//hello
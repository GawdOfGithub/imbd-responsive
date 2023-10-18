

import './App.css'
import { Navbar } from './Components/Navbar'
import { Sidebar } from './Components/Sidebar'
import { useMainContext } from './Contexts/MainContext'
import { SearchBar } from './Components/SearchBar'
import Hero from './Components/Hero'
import { MovieList } from './Components/MovieList'
import { Tester } from './Components/Tester'
export default function App () {
 const {sideBar,setSidebar,searchMode,setSearchMode} = useMainContext()     //using the context
  
  return (
    <>
   <div className='h-screen min-h-screen w-screen bg-gradient-to-r from-cyan-500  '>
     <Tester/>
   {/* {(searchMode) && <SearchBar/>}
    { !(searchMode) && <Navbar/> }
   { (sideBar) && (!searchMode) && <Sidebar/>}
   <MovieList/> */}
   
    </div>
    </>
  )
}


//const url =
//'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=34f3a077ae088c77f86f47aef094218f';
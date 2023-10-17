

import './App.css'
import { Navbar } from './Components/Navbar'
import { Sidebar } from './Components/Sidebar'
import { useMainContext } from './Contexts/MainContext'
import { SearchBar } from './Components/SearchBar'
import Hero from './Components/Hero'

export default function App () {
 const {sideBar,setSidebar,searchMode,setSearchMode} = useMainContext()     //using the context
  
  return (
    <>
   <div className='h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 '>
    <Hero/>
   {/* {(searchMode) && <SearchBar/>}
    { !(searchMode) && <Navbar/> }
   { (sideBar) && <Sidebar/>} */}
    </div>
    </>
  )
}


//const url =
//'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=34f3a077ae088c77f86f47aef094218f';
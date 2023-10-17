

import './App.css'
import { Navbar } from './Components/Navbar'
import { Sidebar } from './Components/Sidebar'
import { useMainContext } from './Contexts/MainContext'
import { SearchBar } from './Components/SearchBar'


export default function App () {
 const {sideBar,setSidebar,searchMode,setSearchMode} = useMainContext()     //using the context
  
  return (
    <>
   <div className='h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500  '>
   {(searchMode) && <SearchBar/>}
    { !(searchMode) && <Navbar/> }
   { (sideBar) && <Sidebar/>}
    </div>
    </>
  )
}



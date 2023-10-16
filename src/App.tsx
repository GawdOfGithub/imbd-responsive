
import './App.css'
import { Navbar } from './Componets/Navbar'
import { useMainContext } from './Contexts/MainContext'

export default function App () {
  const {state,dispatch} = useMainContext()     //using the context
  
  return (
    <>
   <div className='h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500  '>
    <Navbar/>
    </div>
    </>
  )
}



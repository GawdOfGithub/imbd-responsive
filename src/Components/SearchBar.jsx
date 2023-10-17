import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { useMainContext } from '../Contexts/MainContext';
export const SearchBar = () => {
    const {searchMode,setSearchMode} = useMainContext()
  return (
    <div className='flex w-screen justify-center '>
   <input className='w-5/6' type='text'></input>
   <button onClick={()=> setSearchMode(!searchMode)}><ClearIcon/></button>
    </div>
  )
}

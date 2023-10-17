
import React from 'react'
import { useContext,createContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
// 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=34f3a077ae088c77f86f47aef094218f'


type Props = {}
const MainContext = createContext(null)
export default function Context ({children}) {
  
  const initialState = {number:0}
  const [state,dispatch] = useReducer(handleClick,initialState)
  const [sideBar,setSidebar] = useState(false)
  const [searchMode,setSearchMode] = useState(false)
  const url ='https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=34f3a077ae088c77f86f47aef094218f'

  
 function handleClick(state,action)
 {
  
   switch(action.type)
   {
    case "add":
      return {
    ...state,number:state.number+1

      }
      case "subtract":
         return{
            ...state,number:state.number-1
         }
      default:
         state
   }
}
return (
   <MainContext.Provider value={{state,dispatch,sideBar,setSidebar,searchMode,setSearchMode}}>
      {children}
      </MainContext.Provider>

   
)
}

export function useMainContext ()
{
 return useContext(MainContext)
}

import React from 'react'
import { useContext,createContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'


type Props = {}
const MainContext = createContext(null)
export default function Context ({children}) {
  
  const initialState = {number:0}
  const [state,dispatch] = useReducer(handleClick,initialState)
  
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
   <MainContext.Provider value={{state,dispatch}}>
      {children}
      </MainContext.Provider>

   
)
}

export function useMainContext ()
{
 return useContext(MainContext)
}
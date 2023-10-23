import React from 'react'
import { useAuth } from '../Contexts/AuthContext'

export default function WatchList() {
  const {user} = useAuth()
  return (
    <>
    {
      user ? (<div>Hello world</div>):(<div>Hello world 2</div>)
    }
    
    </>
      
  )
}

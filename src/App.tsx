import React from 'react'
import AppLayout from './AppLayout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Home'
 const App = () => {

  const router = createBrowserRouter([
    {
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}
export default App
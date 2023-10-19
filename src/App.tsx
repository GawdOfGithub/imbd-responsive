import React from 'react'
import AppLayout from './AppLayout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import PopularMovies from './pages/PopularMovies'
import TopRatedMovies from './pages/TopRatedMovies'
import UpcomingMovies from './pages/UpcomingMovies'
import NowPlayingMovies from './pages/NowPlaying'
import { Loader } from './Components/Loader'

 const App = () => {

  const router = createBrowserRouter([
    {
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>,
          loader:<Loader/>
          
        },
        {
        path:'/topRatedMovies',
        element:<TopRatedMovies/>
        },
        {
          path:'/popularMovies',
          element:<PopularMovies/>
          },{
            path:'/upcomingMovies',
            element:<UpcomingMovies/>
            },{
              path:'/nowPlayingMovies',
              element:<NowPlayingMovies/>
              },

      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}
export default App
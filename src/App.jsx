import React from 'react'
import AppLayout from './AppLayout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import PopularMovies from './pages/PopularMovies'
import TopRatedMovies from './pages/TopRatedMovies'
import UpcomingMovies from './pages/UpcomingMovies'
import NowPlayingMovies from './pages/NowPlaying'
import ErrorPage from './pages/ErrorPage'

import SignIn from './pages/SignIn'
import WatchList from './pages/WatchList'

 const App = () => {

  const router = createBrowserRouter([
    {
     
       element:<AppLayout/>,
       errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>,
     
          
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
              {
              path:'/signIn',
              element:<SignIn/>
              },
              {
              path:'/watchList',
              element:<WatchList/>
              }


      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}
export default App
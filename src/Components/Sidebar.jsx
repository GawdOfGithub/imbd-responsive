import React from 'react'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import InfoIcon from '@mui/icons-material/Info';
export const Sidebar = () => {
  return (
    <div className='h-screen w-36 bg-black  flex flex-col divide-y divide-lime-50 '>
    <button className='border-b border-solid border-gray-500 text-extrabold'><LiveTvIcon/>Watch list😎😎</button>
    <button className='border-b border-solid border-gray-500 text-extrabold '><InfoIcon/>Now Playing🎃🎃</button>
    <button className='border-b border-solid border-gray-500 text-extrabold'>Top rated</button>
    <button className='border-b border-solid border-gray-500 text-extrabold'>Upcoming</button>
    <button className='border-b border-solid border-gray-500 text-extrabold'>Discover</button>
    <button className='border-b border-solid border-gray-500 text-extrabold'>About me</button>
    </div>

  )
}

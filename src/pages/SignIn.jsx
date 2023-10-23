import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from '../Contexts/AuthContext';
export default function SignIn() {
  const {user_is_logged_in,setUser_is_logged_in,auth,signInWithGoogle,logInWithEmailAndPassword} = useAuth()
  const [visibility, setVisibility] = useState("false");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");       
  const handleLocalSignIn = async(e) =>
  {
    try{
      e.preventDefault()
      await logInWithEmailAndPassword(email,password)
      const user = auth.currentUser
      if(user)
      {
      alert("you have successfully entered our world")
      setUser_is_logged_in(true)
      }
      else
      {
        console.log("invalid credentials");
      }
    }
    catch(error)
    {
      console.log(error)
    }
  }
  return (
   
      <div className="w-1/2 min-h-screen mx-auto mt-40 min-w-fit">
        <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 min-h-">
          <div className="mb-4">
          <label className='flex justify-center mb-4 text-black text-2xl font-extrabold'>Let&apos;s GO 🚀<span></span></label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
           
          </div>
          <div className="mb-6 ">
            
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
              id="password"
              type= {visibility? "text":"password"}
              placeholder="Password"
              value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="button" className='flex justify-center items-center ml-28 mt-3 hover:bg-black' onClick={()=>setVisibility(!visibility)}> {visibility?<VisibilityIcon/>:<VisibilityOffIcon/>}</button>
          </div>
          <div className="mb-4">
            <Link to="/resetPassword" className="text-blue-500 hover:underline">
              Forgot your password? Reset it here.
            </Link>
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  "
              onClick={handleLocalSignIn}
              
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:text-red-500 z-40">
              Register now
            </Link>
          </p>
        </div>
        <div className="text-center mt-5 ">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={signInWithGoogle}>
            Sign In with Google
          </button>
        </div>
      </div>
    );
  
}

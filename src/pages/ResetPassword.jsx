// ResetPassword.jsx
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
 import  {sendPasswordReset} from "../firebase";
export default function ResetPassword() {
  const [email, setEmail] = useState("");
  
  
  const handleReset = async(e)=>
  {
   e.preventDefault()
   try{
    await sendPasswordReset(email)
 
   }
   catch(error)
   {
   console.log(error);

   }


  }
  
  return (
    
    <div className="w-1/2 min-h-screen mx-auto mt-40 min-w-fit">
      <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 min-h-">
        <div className="mb-4">
          <label className="flex justify-center mb-4 text-black text-2xl font-extrabold">
            Reset Password 🚀
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="email"
            type="email"
            placeholder="Email"
            value ={email}
            onChange ={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleReset}
            type="submit"
          >
            Reset Password
          </button>
        </div>
      </form>
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          Remember your password?{' '}
          <Link to="/signin" className="text-blue-500 hover:text-red-500 z-40">
            Sign In
          </Link>
        </p>
      </div>
    </div>
    
  );
}

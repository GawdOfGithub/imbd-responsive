import { useState,useEffect } from "react";

export const effect = (url)=>
{
  const[data,setData] = useState()
  const[loading,setLoading] = useState(false)

  useEffect(()=>
  {
    const fetchData = async (url)=>
    {
      try
      {
        setLoading(true)
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
       const realData = await res.json()
         setData(realData)
         

      }
      catch(error)
      {
       
        console.log(error)
      }
      finally
      {
        setLoading(false)
      }

    }
    fetchData()
  },[url]
  )
} 
import { useState, useEffect } from "react";

const useFetch = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
const options ={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGYzYTA3N2FlMDg4Yzc3Zjg2ZjQ3YWVmMDk0MjE4ZiIsInN1YiI6IjY1MmU1MjhjY2FlZjJkMDBhZGE3ZTgwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8CFMecPEGw0cyJcWBiw-XdKEqsfd3tzo6pIxCnxlHHQ'
}
}


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url,options);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const realData = await res.json();
        //console.log(realData);
        setData(realData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading,options};
};

export default useFetch;

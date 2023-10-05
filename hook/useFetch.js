import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint,query)=>{
    const [data,setData] = useState([]);
    const [isLoading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': 'd205f8f3b3mshee4cf9795609593p1301c1jsn635477f1fc27',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };

      const fecthData = async()=>{
        setLoading(true)
        try {
          const response = await axios.request(options)
          setData(response.data.data)
          setLoading(false)
        } catch (error) {
          setError(error)
          alert("There is an error")
        }finally{
            setLoading(false)
        }
      }

      useEffect(()=>{
        fecthData()
      },[])

      const refetch = ()=>{
        setLoading(true)
        fecthData();
      }

    return {data,isLoading,error,refetch};
}

export default useFetch
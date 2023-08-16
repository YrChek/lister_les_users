/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { UsersData, Info } from "../types/type";

export default function usePolling(url: string,  initialData: UsersData[] | Info) {

  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Неправильный статус ответа ${response.status}`)
      }
      const data = await response.json()
      setData(data)
      
    } catch (error) {
      console.log(error)
    }
    finally {
      // debugger
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    return () => setData(initialData)
  }, [url])

  return [{data, isLoading}]
}

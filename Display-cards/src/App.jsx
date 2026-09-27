import React from "react";
import { useState, useRef,useEffect } from "react";
import "./Index.css"
export default function App() {

  const [api, setApi] = useState([])
  const API = useRef("https://jsonplaceholder.typicode.com/posts")
  const fetchData = async () => {
    try{
    const response = await fetch(API.current)
    const data = await response.json()
    setApi(data)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="api">
        {api.map((Api) => (
          <div key={Api.id} className="card max-w-md bg-amber-300 border-2 border-black p-1.5 m-1.5">
            <h1>{Api.title}</h1>
            <p>{Api.body}</p>
            <span>By user id: {Api.userId}</span>
          </div>
        
        ))}
      </div>
    

)
}
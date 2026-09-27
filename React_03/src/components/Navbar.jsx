import { useEffect } from "react"
import React from 'react'

const Navbar=({color})=>{
useEffect(() => {
  alert("Color was changed!")
}, [color])

    //Example of cleanup function
    useEffect(()=>{
        alert("Hey welcome to the navbar component")
        return () => {
            alert("Navbar component was unmounted")
        }
    },[])

  return (
    <div>
      The navbar is of {color} color
    </div>
  )
}

export default Navbar

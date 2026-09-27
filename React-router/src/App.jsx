import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <><Navbar/><Home/></>
    },
    {
    path: "/About",
    element: <><Navbar/><About/></>
    },
    {
    path: "/Contact",
    element: <><Navbar/><Contact/></>
    },
    {
    path: "/User/:username",
    element: <><Navbar/><User/></>
    },

  ])

  return (
    <>
    
      <RouterProvider router={router}/>
    </>
  )
}

export default App

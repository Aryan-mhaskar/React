import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 text-amber-300 flex justify-between mx-0 py-3">
        <div className="logo">
            <span className="font-bold text-2xl">iTask</span>
        </div>
        <ul className="flex mx-9 gap-8">
        <li  className="hover:cursor-pointer hover:font-bold transition-all duration-300 ease-in-out">Home</li>
        <li  className="hover:cursor-pointer hover:font-bold transition-all duration-300 ease-in-out">Your Tasks</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

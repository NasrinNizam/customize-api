import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
    <nav className="mb-16 mt-5">
        <div className="container">
           <div className="menu-row flex justify-between items-center">
           <div className="logo-col">
                <h1 className="text-[40px] text-blue-800 font-black">Elegant Essence</h1>
            </div>
            <div className="menu">
                <ul className="flex flex-wrap gap-5 justify-center items-center text-lg text-white">
                    <li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 hover:scale-110 hover:text-[#000] py-1 rounded-2xl"><Link to="/">Home</Link></li>
                    <li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 hover:scale-110 hover:text-[#000] py-1 rounded-2xl"><Link to="/about">About</Link></li>
                    <li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 hover:scale-110 hover:text-[#000] py-1 rounded-2xl"><Link to="/product">Products</Link></li>
                    <li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 hover:scale-110 hover:text-[#000] py-1 rounded-2xl"><Link to="contact">Contact</Link></li>
                    <li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 hover:scale-110 hover:text-[#000] py-1 rounded-2xl"><Link to="/help">Help</Link></li>
                    <li className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 hover:scale-110 hover:text-[#000] py-1 rounded-2xl"><Link to="/user">Users</Link></li>
                </ul>
            </div>
           </div>
        </div>
    </nav>
    </>
  )
}

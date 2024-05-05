import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/hospital_logo.jpg';

const Navbar = () => {
    return (
        <div>
            <div className="bg-gray-800 z-10 text-white py-4 px-6 flex items-center justify-between fixed w-full" >
                <Link to="/">
                    <img src={logo} alt="Hospital Logo" className="w-16 h-8" />
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-12">
                    <Link to="/" className="text-white hover:text-blue-700 font-bold">Home</Link>
                    <Link to="/about" className="text-white hover:text-blue-700 font-bold">About</Link>
                    <Link to="/department" className="text-white hover:text-blue-700 font-bold">Department</Link>
                    <Link to="/contact" className="text-white hover:text-blue-700 font-bold">Contact</Link>
                    <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</Link>
                    <Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar

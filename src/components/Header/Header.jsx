import {Link, NavLink} from 'react-router-dom';
import React from 'react';


function Header() {
    return (
        <header className='shadow sticky z-50 top-0'>
            <div className="bg-blue-950 bg-opacity-95 w-screen h-20 flex justify-around items-center font-serif ">
                <div className="text-4xl font-extrabold text-white"> Logo </div>
                <div className="text-white ">
                    <ul className="flex space-x-6">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/github">GitHub</Link></li>
                        
                    </ul>
                </div>
                <div className="flex space-x-6 text-cyan-600">
                    <button className="bg-slate-600 bg-opacity-50 px-6 py-2 rounded-3xl">Login</button>
                    <button className=" bg-slate-600 bg-opacity-50 px-6 py-2 rounded-3xl">Get Started</button>
                </div>
            </div>
        </ header>
    )
}

export default Header;
import React from 'react';
import logo from "../assets/Netflix_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }
  return (
//     <div className="absolute flex items-center p-4 bg-transparent ml-24">
//   <img src={logo} alt="Logo" className="w-32 h-auto" />
// </div>
<header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black/80 to-transparent z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Netflix" className="w-32 md:w-40" />
      </div>

      {/* Navigation 
      <nav className="hidden md:flex space-x-6 text-white font-medium">
        <Link to="/">Home</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/latest">New & Popular</Link>
        <Link to="/mylist">My List</Link>
      </nav>
    */}
      {/* Right section */}
      { user && ( 
      <div className="flex items-center space-x-4">
        {/* Search icon */}
        <button className="text-white hover:text-gray-300">
          🔍
        </button>        
       
        <span className="font-medium">{user.displayName}</span>
         
        <img
          src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          alt="User Avatar"
          className="w-8 h-8 rounded cursor-pointer"
        />
        
          
        <button    
            onClick={handleSignOut}     
          className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
        >
          Sign Out
        </button>       

      </div>
      )}
    </header>
  )
}

export default Header
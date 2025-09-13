import React from 'react';
import logo from "../assets/Netflix_Logo.png";

const Header = () => {
  return (
    <div className="absolute flex items-center p-4 bg-transparent ml-24">
  <img src={logo} alt="Logo" className="w-32 h-auto" />
</div>
  )
}

export default Header
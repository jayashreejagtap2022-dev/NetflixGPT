import React, { useEffect } from 'react'
import logo from "../assets/Netflix_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { PROFILE_IMG } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {}).catch((error) => {
            navigate("/error");
        });
    }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
        const {uid, email, displayName} = user;
        dispatch(
          addUser(
            {
              uid: uid, 
              email: email, 
              displayName: 
              displayName
            })
          );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //this will be called unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () =>{
     dispatch(toggleGptSearchView());
  }

  return (
//     <div className="absolute flex items-center p-4 bg-transparent ml-24">
//   <img src={logo} alt="Logo" className="w-32 h-auto" />
// </div>
<header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black/80 to-transparent z-50 " >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Netflix" className="w-32 md:w-40" />
      </div>
    
      {/* Right section */}
      { user && ( 
      <div className="flex items-center space-x-4">
        {/* Search icon */}
        <button className="text-white hover:text-gray-300" onClick={handleGptSearchClick}>
          {!showGptSearch ? 'GPT Search' : 'Home' }
        </button>        
       
        <span className="text-white hover:text-gray-300 font-medium">{user.displayName}</span>
         
        <img
          src={PROFILE_IMG}
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
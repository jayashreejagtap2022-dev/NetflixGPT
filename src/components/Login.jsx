import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validate';
import { auth } from '../utils/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/constants';


const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handdledButtonClick = () => {

    //validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if(message) return;

    // sign in and sign out logic
    if(!isSignInForm){
      // signout
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
            //update user
          updateProfile(user, {
            displayName: name.current.value, photoURL: ""
          }).then(() => {
              //update store
              const {uid, email, displayName} = auth.currentUser;
              dispatch(
                        addUser(
                          {
                            uid: uid, 
                            email: email, 
                            displayName:displayName
                          })
              );
             
          }).catch((error) => {
              setErrorMsg(error);             
          });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode+" - "+errorMessage);          
        });

    }else{
      //sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode+" - "+errorMessage);
        });

    }

  }
  return (
    <div>
        <Header />
         <div
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${BG_IMG})`
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          
          {/* Content on top */}
          <div className="relative z-10 flex items-center justify-center min-h-screen text-white">
              <form onSubmit={(e) => e.preventDefault()} className="bg-black/70 p-8 rounded-lg shadow-lg w-full max-w-sm text-white">
                <h2 className="text-2xl font-bold mb-6 text-center">{isSignInForm ? "Sign In" : "Sign Up"}</h2>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    ref={email}
                    type="text"
                    id="email"
                    placeholder="Email"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                {/* Name */}
                {!isSignInForm && (
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    ref={name}
                    type="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                )} 

                {/* Password */}
                <div className="mb-6">
                  <label className="block text-sm mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    ref={password}
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <p className="text-red-500 text-sm mt-1">{errorMsg}</p>
                {/* Button */}
                <button
                  
                  className="w-full bg-red-600 hover:bg-red-700 transition-colors py-3 rounded font-semibold"
                  onClick={handdledButtonClick}
                >
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                {/* Extra links */}
                <p className="mt-4 text-sm text-center" onClick={toggleSignInForm} >
                  {isSignInForm ? "New to Netflix?" :  "Already a user?"} <a href="#" className="text-red-500 hover:underline">{isSignInForm ? "Sign Up" : "Sign In"}</a>
                </p>
              </form>
          </div>
        </div>

    </div>
  )
}

export default Login
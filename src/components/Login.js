import React from 'react'
import Header from './Header'
import { useState } from 'react';

 const Login = () => {

  const[isSignInForm,setisSignInForm]=useState(true);

  const toggleSignInForm=()=>{
   setisSignInForm(!isSignInForm)

  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg' alt='logo' className='bg-blend-multiply'></img>
        </div>
        

        <form className='bg-black absolute p-12 w-3/12 my-36 mx-auto left-0 right-0 text-white flex flex-col justify-center items-center bg-opacity-80 rounded-lg'>

        <h1 className='text-3xl'>
        {isSignInForm? "Sign In" : "Sign Up"}
        </h1>
       
        {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-2 m-2 w-[100%] bg-gray-800'></input>)
        }

          <input type='email' placeholder='Email Address' className='p-2 m-2 w-[100%] bg-gray-800'></input>
          <input type='password' placeholder='Password' className='p-2 m-2 w-[100%] bg-gray-800'></input>
          <button className='p-4 m-4 bg-red-600 w-[100%] rounded-lg'>
          {isSignInForm? "Sign In" : "Sign Up"}
          </button>
          <p className='font-mono ' onClick={toggleSignInForm}>
          {isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}  </p>
        </form>

      
   
    </div>
  )
}

export default Login

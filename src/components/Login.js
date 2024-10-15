import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import checkValidData from '../utils/validate';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth} from '../utils/firebase'

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_PHOTO_URL } from '../utils/constants';

 const Login = () => {

  const dispatch = useDispatch();
   
   const[isSignInForm,setisSignInForm]=useState(true);
   const[errorMessage,seterrorMessage]=useState(null);
   
  
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null);


  //*************************************** */

  const toggleSignInForm=()=>{
   setisSignInForm(!isSignInForm)

  }

  const handleButtonClick=()=>{
   
    // checkValidData( )
    console.log(email?.current?.value)
    console.log(password?.current?.value)
    seterrorMessage(checkValidData(email?.current?.value , password?.current?.value));

    if(errorMessage) return ;


      //* code for signIn/SignUP authentication

      
      if(!isSignInForm){
        //? signUp logic 
      //************************************************** */

      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)

  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);

    //after successful sign up ::: 
    
    //* update the userProfile :

   
updateProfile(user, {
  displayName: name?.current?.value, 
  photoURL:USER_PHOTO_URL
})
.then(()=>{
  // Profile updated! 

  // then dispatch with updated profile ::;
 
  const {uid,email,displayName,photoURL}= auth.currentUser;
  dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
  //then navigate :: done in hEader compo now
  // navigate("/browse");
})
.catch((error) => {
  // An error occurred
  // ...
  console.log(error.message)
});

    
    
    // ...
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+ "-" +errorMessage)
    
    // ..
  });


  



      }

      else{
        //? signInlogic 
       //************************************************** */

       signInWithEmailAndPassword(auth, email?.current?.value , password?.current?.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("email and password" , user)
    // ...
    //after successful sign ip ::: 
    
  })
  .then(()=>{
    // navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // seterrorMessage( errorCode+ errorMessage)
    seterrorMessage("Please Sign Up !")
  });

      }
    
    



  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        
        <img src={BG_URL} alt='logo' className='bg-blend-multiply'>
        </img>
        </div>
        

        <form onSubmit={(e)=>e.preventDefault()} className='bg-black absolute p-12 w-3/12 my-36 mx-auto left-0 right-0 text-white flex flex-col justify-center items-center bg-opacity-80 rounded-lg'>

        <h1 className='text-3xl'>
        {isSignInForm? "Sign In" : "Sign Up"}
        </h1>
       
        {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-2 m-2 w-[100%] bg-gray-800'></input>)
        }

          <input 
          ref={email}
          type='email' placeholder='Email Address' className='p-2 m-2 w-[100%] bg-gray-800'></input>

          <input
          ref={password}
           type='password' placeholder='Password' className='p-2 m-2 w-[100%] bg-gray-800'></input>
          
          {(errorMessage!=null) && (<p className='text-red-600 font-bold text-lg'>{errorMessage}</p>)}

          <button className='p-4 m-4 bg-red-600 w-[100%] rounded-lg' onClick={handleButtonClick}>
          {isSignInForm? "Sign In" : "Sign Up"}
          </button>

          <p className='font-mono ' onClick={toggleSignInForm}>
          {isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}  </p>
        </form>

      
   
    </div>
  )
}

export default Login

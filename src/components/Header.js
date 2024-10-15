import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import GptSearch from "./GptSearch";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header =()=>{


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user= useSelector((store)=>store.user);
    const showGptSearch= useSelector((store)=>store.gpt.showGptSearch);
   
    
   
    


    useEffect(()=>{
   

      const unsubscribe =onAuthStateChanged(auth, (user) => {
        if (user) {
          //* if user signs in
      //*  if my user is signed in I can get a lot of info from the user object 
          const {uid,email,displayName,photoURL}= user;
      
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          
          // if my user is signed in I will navigate to browse page 
          navigate("/browse")
          
      
         
      
      
          // ...
        } 
        else {
          //* User is signed out
          // ...
          dispatch(removeUser());
          navigate("/")
          
        
        }
      });

      return ()=>{
        //unsubscribe when compo unmounts ::: firebase :: unsubscribe ....
        unsubscribe();
      }
      
        },[])
    

    const handleSignOut=()=>{
     


signOut(auth)
.then(() => {
  // Sign-out successful.

//   after succesfful sign out navigate to login page 

// navigate("/");

}).catch((error) => {
  // An error happened.
  navigate("/error")
});

    }


    const handleGptSearch=()=>{

      //toggle Gpt search using redux store

      dispatch(toggleGptSearchView())



    }

    const handleLanguageChange=(e)=>{
      dispatch(changeLanguage(e.target.value));

    }

    return (
        <div className="absolute z-10 w-screen bg-gradient-to-b from-black flex justify-around items-center">

            <img alt="netFlixlogo" src={NETFLIX_LOGO} className="w-44  m-4   " ></img>


{user && (<div className="flex justify-between items-center">

    { showGptSearch && 
     <select className="p-2 bg-gray-900 text-white 
     font-bold" onChange={handleLanguageChange}>
    {SUPPORTED_LANGUAGES.map((curELem)=>{
      return <option key={curELem.identifier} value={curELem.identifier}>{curELem.name}</option>

      })}
     </select>
     }
  
 <button className="text-white bg-purple-500 rounded-lg p-2 mx-2" onClick={handleGptSearch}>
  {
    showGptSearch ? "Home Page" : "Gpt Search"
  }
 </button>

<img alt="userLogo" src={user.photoURL} className="w-12 h-12 mx-2"></img>
   {/* <img alt="logo" src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" className="w-12 h-12"></img> */}

    <button className="p-2 m-2 bg-red-600 text-white rounded-lg" onClick={handleSignOut}>Sign Out</button>
</div>)}
        </div>

    )
}

export default Header;
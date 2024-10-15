import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const preferredLang= useSelector((store)=>store.config.lang);


  return (
    <div className='pt-[10%] pl-12 flex justify-center '>

    
{    preferredLang &&    (<form className='bg-black w-1/2 flex justify-center items-center'>
            <input type='text' className='p-4 m-2 w-1/2'placeholder={lang[preferredLang].gptSearchPlaceholder} ></input>

            <button className='bg-red-600 text-white p-4 m-2 rounded-lg w-1/2'>{lang[preferredLang].search}</button>

        </form>)}
       
       {/* 
        GptSearchBar
    GptMovieSuggestions
       */}
    </div>
  )
}

export default GptSearchBar
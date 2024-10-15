import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSUggestions from './GptMovieSUggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
   <div>
    <div className='absolute -z-10'>
    <img src={BG_URL} alt='netflixBg'></img>
    </div>
    <GptSearchBar/>
    <GptMovieSUggestions/>

   </div>
  )
}

export default GptSearch
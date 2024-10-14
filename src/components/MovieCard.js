import React from 'react'
import { IMG_CDN_URL} from '../utils/constants'

const MovieCard = ({path}) => {
  return (
    <div className='w-32'>
        <img alt='movieCard' src={IMG_CDN_URL+path}></img>
    </div>
  )
}

export default MovieCard
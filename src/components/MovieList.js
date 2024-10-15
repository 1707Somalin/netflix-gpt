import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    
  return (
    <div className='px-2  text-white font-mono'>
        <h1 className='text-3xl py-4 pl-2'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-default"'>
        <div className='flex gap-2'>
                
       { movies && (movies?.map((curELem)=><MovieCard key={curELem.id} path={curELem.poster_path}/>))}

            </div>
        </div>
    </div>
  )
}

export default MovieList
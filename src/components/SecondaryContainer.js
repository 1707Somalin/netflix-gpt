import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies);
 
  return (

    movies.nowPlayingMovies && (
    <div className='bg-black'>

      <div className='-mt-64 relative  z-100 pl-12'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
      {/* 
      MovieList - Popular
        MOvieCards*n
      MovieList - Now Playing
         MOvieCards*n
      MovieList - Trending
         MOvieCards*n
      MovieList - Horror
         MOvieCards*n
      */}
    </div>)
   
  )
}

export default SecondaryContainer
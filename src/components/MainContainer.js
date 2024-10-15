import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

    if(movies===null) return ; //if nowPlayingMovies is null

    //now playing movies is a list of all 20 movies
    const mainMovie = movies[1];
    console.log(mainMovie)
  return (
    <div className='relative'>
        <VideoTitle mainMovie={mainMovie}/>
        <VideoBackground movieId={mainMovie?.id}/>
    </div>
  )
}

export default MainContainer
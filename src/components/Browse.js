
import { useNowPlayingMovie } from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  
  //* custom hook
  useNowPlayingMovie();

  
  return (
    <div className='relative'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
         MainContainer 
           -VideoBackground
           -VideoTitle
        
         secondary container
            -MovieList*n
              -cards*n

      */}

      
    </div>
  )
}

export default Browse
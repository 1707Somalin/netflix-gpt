
import { useNowPlayingMovie  } from '../hooks/useNowPlayingMovies'
import { usePopularMovies } from '../hooks/usePopularMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  
  //* custom hook
  useNowPlayingMovie();
  usePopularMovies();

  
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
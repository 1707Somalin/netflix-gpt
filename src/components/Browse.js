
import { useSelector } from 'react-redux';
import { useNowPlayingMovie  } from '../hooks/useNowPlayingMovies'
import { usePopularMovies } from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  
  //* custom hook
  useNowPlayingMovie();
  usePopularMovies();


  //* gpt search
  const showGptSearch= useSelector((store)=>store.gpt.showGptSearch)

  
  return (
    <div className='relative'>
      <Header/>
      {showGptSearch ? 
      (<GptSearch/>) :
       <>
       <MainContainer/>
       <SecondaryContainer/>
      </>
      }
      
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
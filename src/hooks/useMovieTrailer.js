import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

import { useDispatch} from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer =(movieId)=>{
    //* one method to have trailerId using state variable 
  //? const [trailerId,settrailerId]=useState(null);

  //*second method :: using redux store 
  const dispatch = useDispatch();

  
  

  const getMovieVideos = async()=>{

    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
    const json = await data.json();
    console.log("MovieVids",json.results)

    const filterTrailerData= json.results.filter((curElem)=>{
      return curElem.type==="Trailer"

    })

    //incase there are no trailer
   const trailer = filterTrailerData.length ? filterTrailerData[0] : json.results[0];

  //  settrailerId(trailer.key)

  dispatch(addTrailerVideo(trailer))
  
  // console.log("tra",trailerId)
  }

  
  useEffect(()=>{
    getMovieVideos();

  },[])

}

export default useMovieTrailer;
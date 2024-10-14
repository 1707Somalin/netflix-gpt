import React from 'react'

const VideoTitle = (props) => {
    const{mainMovie}=props
    const{original_title,overview}=mainMovie;
    
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-3xl '>{original_title}</h1>
        <p className='mt-2 w-1/4 '>{overview}</p>
        <div className='flex gap-10 my-4'>

            <button className=' bg-white text-black border-2 p-2 mt-2 w-28 rounded-lg hover:bg-opacity-80'>▶️ Play</button>

        <button className="border-2 p-2 px-4 mt-2 w-30 rounded-lg">ℹ️ More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle
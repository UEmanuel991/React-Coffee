import React from 'react'
import '../cStyle.css/componentsStyle.css'
import VideoBackground from '../../assets/last-video-fundal.mp4'

function BackgroundVideo() {
  return (
    <div>
        <video autoPlay='autoPlay' loop='loop' muted className='video-background'>
            <source src={VideoBackground} type='video/mp4'></source>
        </video>
    </div>
  )
}

export default BackgroundVideo
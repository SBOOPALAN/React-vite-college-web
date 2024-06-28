import React, { useRef } from 'react'
import './Video.css'

const Video = ({ playState, setPlayState }) => {
  const Player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === Player.current) {
      setPlayState(false);
    }
  }

  return (
    <div className={`video ${playState ? '' : 'hide'}`} ref={Player} onClick={closePlayer}>
      <video src='college-video.mp4' autoPlay={true} muted controls></video>
    </div>
  )
}

export default Video

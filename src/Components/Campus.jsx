import React from 'react'
import './Campus.css'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src="/React-vite-college-web/public/gallery-1.png" alt="" />
        <img src="/React-vite-college-web/public/gallery-2.png" alt="" />
        <img src="/React-vite-college-web/public/gallery-3.png" alt="" />
        <img src="/React-vite-college-web/public/gallery-4.png" alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src="/React-vite-college-web/public/white-arrow.png" alt="" /></button>
    </div>
  )
}

export default Campus
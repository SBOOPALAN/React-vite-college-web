import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world <br /><span id='azar'>AzarTech</span> University</h1>

        <p>Our cutting-edge curriculum is designed to empower students
          with the knowledge, skills, and experience needed to excel in
          the dynamic field of education</p>

        <button className='btn'>Explore more<img src="/React-vite-college-web/public/dark-arrow.png" alt="" /></button>

      </div>

    </div>
  )
}

export default Hero
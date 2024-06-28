import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Programs from './Components/Programs'
import Title from './Components/Title'
import About from './Components/About'
import Campus from './Components/Campus'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Video from './Components/Video'



const App = () => {

  const [playState, setPlayState]= useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS'title='what Student Says'/>
         <Testimonials/>
         <Title subTitle='Contact Us'title='Det in Touch'/>
         <Contact/>
         <Footer/>
         <Video playState={playState} setPlayState={setPlayState}/>
      </div>

    </div>
  )
}

export default App
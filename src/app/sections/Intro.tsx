'use client'
import React from 'react'
import ScrollVelocity from '../components/scrollvelocity/ScrollVelocity'

const Intro = () => {
  return (
    <div>
        <ScrollVelocity
  texts={['* ZAFROS *', ' Essence of ellegance ',]} 
  velocity={190} 
  className="hero-title font-extrabold"
/>
    </div>
  )
}

export default Intro
import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
<div className='hero-outer' >
        <div className='hero-main'>
        <div className='title'>
            <h1 >Find the best job that fit you</h1>
            
                <Link  className='hero-links'>Search a Job</Link>
                <Link className='hero-links'> Find a Talent</Link>
            </div>
        </div>
</div>
)
}

export default Hero
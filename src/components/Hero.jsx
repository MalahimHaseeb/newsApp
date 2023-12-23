import React from 'react'

const Hero = () => {
  return (
    <div className='container-fluid bg-dark text-white d-flex flex-column justify-content-center align-items-center' style={{height:'50vh'}}>
        <h2 style={{fontSize:'37px', color:'orange'}}>NewsMonkey</h2>
        <h5>
            The website is build with the News Api
        </h5>
    </div>
  )
}

export default Hero
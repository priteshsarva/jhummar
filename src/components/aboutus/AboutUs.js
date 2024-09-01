import React from 'react'
import './AboutUs.css'
import { Parallax } from 'react-scroll-parallax';
// import bg from './assets/svg/Background.svg'
import flowerDesign from '../../assets/PNGs/flowerDesign.png'



const AboutUs = () => {
  return (
    <>    
    <Parallax speed={50} style={{zIndex:"1" , position:'relative'}}>
      {/* <img src={bg} alt="" sizes="" srcset="" className='backgroundimages' /> */}
      <div className="backgroundimages">
        <img src={flowerDesign} alt="" srcset=""  className='flowerDesign'/>
        <h1 className='aboutustitle'>Chandelier</h1>
      </div>
      </Parallax>
    </>
  )
}

export default AboutUs

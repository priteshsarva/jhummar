import React from 'react'
import './AboutUs.css'
import { Parallax } from 'react-scroll-parallax';
// import bg from './assets/svg/Background.svg'
import flowerDesign from '../../assets/PNGs/flowerDesign.png'



const AboutUs = () => {

  return (
    <>
      <Parallax speed={50} style={{ zIndex: "1", position: 'relative' }} id='aboutUs'>
        {/* <img src={bg} alt="" sizes="" srcset="" className='backgroundimages' /> */}
        <Parallax opacity={[0, 1]} startScroll={0} endScroll={600}>
          <div className="backgroundimages d-flex align-items-center flex-column mb-3" >
            <img src={flowerDesign} alt="" srcset="" className='flowerDesign' />
            <h1 className='aboutustitle'>Chandelier</h1>
            <p className='aboutusDescription mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a dolor veniam error magnam earum eos quasi aspernatur veritatis minus. Perspiciatis soluta porro itaque, reprehenderit consequatur blanditiis accusantium mollitia quas?
            </p>
            <button type="button" className='aboutusShopNow mt-3'>Shop Now</button>
          </div>
        </Parallax>



        <div className="container-fluid row justify-content-center" style={{paddingLeft: '0px',paddingRight: '0px',marginLeft: '0px',marginRight: '0px'}}>

          <div className="col-6"> lest</div>
          <div className="col-6">most</div>

        </div>










      </Parallax>
    </>
  )
}

export default AboutUs

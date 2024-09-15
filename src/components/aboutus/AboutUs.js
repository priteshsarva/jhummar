import React from 'react'
import './AboutUs.css'
import { Parallax } from 'react-scroll-parallax';
// import bg from './assets/svg/Background.svg'
import flowerDesign from '../../assets/PNGs/flowerDesign.png'
import chandelier4 from '../../assets/images/chandelier-4.png'



const AboutUs = () => {

  return (
    <>
      <Parallax speed={50} style={{ zIndex: "1", position: 'relative' }} id='aboutUs' >
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



        <div className="container-fluid row justify-content-center" style={{ paddingLeft: '0px', paddingRight: '0px', marginLeft: '0px', marginRight: '0px' }}>

          <div className="col-12 col-md-6 d-flex justify-content-center">
            <Parallax translateX={[-10, 0]} opacity={[0, 1]} startScroll={700} endScroll={1000} className="col-12 col-md-6 d-flex justify-content-center">
              <img src={chandelier4} alt="" className='chandelier4' />
            </Parallax>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <Parallax className="aboutUs-content mx-5" opacity={[0, 1]} scale={[0.5, 1]} startScroll={700} endScroll={1000} >
              <h3>Titile</h3>
              <h3>long title</h3>
              <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ab velit, provident veniam officia amet aspernatur voluptas aliquid. Impedit temporibus rem labore explicabo consequatur! Mollitia culpa quis veniam? Minus, optio?</p>
              <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime tenetur magni nostrum commodi doloribus enim nisi accusantium, vel sapiente fugit incidunt placeat possimus nihil iusto impedit, labore libero culpa!</p>
              <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias voluptas voluptates, temporibus eum, ad pariatur laborum iure, explicabo vel culpa rerum dolore reprehenderit aliquam excepturi atque? Perferendis, soluta at.</p>
            </Parallax>
          </div>

        </div>










      </Parallax>
    </>
  )
}

export default AboutUs

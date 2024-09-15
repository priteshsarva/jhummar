
import React, { useRef, useState } from 'react';
import './HeroSlider.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax } from 'react-scroll-parallax';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import i1 from '../../assets/images/chandelier-1.jpg'
import i2 from '../../assets/images/chandelier-2.jpg'
import i3 from '../../assets/images/chandelier-3.jpg'


import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

const HeroSlider = () => {
    const images = [i1, i2, i3];

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                effect={'fade'}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={false}
                modules={[Autoplay, 
                    // Pagination, 
                    Navigation]}
                className="mySwiper"
            >

                {images.map((image) => {
                    return <SwiperSlide>

                        <img src={image} alt="" srcset="" />
                    </SwiperSlide>
                })}


                <Parallax opacity={[.3, 1]} className="bgColor" startScroll={0} endScroll={500}>
                </Parallax>
                <Parallax className="swiperwrap"  
                opacity={[1, 0]} 
                startScroll={0} endScroll={500}>
                    <div className="title">
                        <h1>Chandelier</h1>
                    </div>
                    {/* <div className="subtitle" >
                        Subtitle
                    </div> */}
                    <div className="text" >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                    <button type="button" className='aboutusShopNow mt-3'>Shop Now</button>


                </Parallax>
            </Swiper>


        </>
    )
}

export default HeroSlider

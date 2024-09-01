
import React, { useRef, useState } from 'react';
import './HeroSlider.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import i1 from '../../assets/images/chandelier-1.jpg'
import i2 from '../../assets/images/chandelier-2.jpg'
import i3 from '../../assets/images/chandelier-3.jpg'


import { Pagination, Navigation } from 'swiper/modules';

const HeroSlider = () => {
    const images = [i1,i2,i3]
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {images.map((image) => {
                    return <SwiperSlide>
                        <img src={image} alt="" srcset="" />
                    </SwiperSlide>
                })}
            </Swiper>


        </>
    )
}

export default HeroSlider

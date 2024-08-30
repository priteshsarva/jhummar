
import React, { useRef, useState } from 'react';
import './HeroSlider.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const HeroSlider = () => {
    const images = ["https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"]
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

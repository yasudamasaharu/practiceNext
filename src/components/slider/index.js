import Image from 'next/image';
// import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {
  const ImgList = ['/slide1.jpg','/slide2.jpg','/slide3.jpg','/slide4.jpg'];
  
  return (
    <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
        }}
        modules={[ Autoplay, EffectFade, Navigation, Pagination]}
        // className="flex items-center w-full"
      >
      {ImgList.map((path, i) => {
        return (
          <SwiperSlide key={i}>
            <Image src={path} width={400} height={400}/>
          </SwiperSlide>)
      })}
    </Swiper>
  )
}

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import { Pagination, EffectCoverflow, Autoplay } from "swiper"
import { MainImage } from "gatsby-plugin-image"

const Slider = ({ slider }) => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slider?.map(u => (
          <SwiperSlide key={u.id}>
            <MainImage
              className=" w-[100%] h-[30vh] lg:h-[90vh]  mt-[87px]"
              src={u.sliderImage.url}
              alt="slider"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
export default Slider

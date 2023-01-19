import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import { Pagination, EffectCoverflow, Autoplay } from "swiper"

const Slider = ({ slider }) => {
  return (
    <>
      <Swiper
        pagination={true}
        autoplay={{ delay: 3000 }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slider.map(u => (
          <SwiperSlide>
            <img
              className="object-cover h-[826px] mt-[92px] w-full"
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

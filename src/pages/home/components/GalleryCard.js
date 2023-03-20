import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import { Pagination, EffectCoverflow, Autoplay } from "swiper"
import { MainImage } from "gatsby-plugin-image"

const GalleryCard = () => {
  return (
    <Wrapper htmlFor="my-modal-5">
      <Image src="https://i.ibb.co/jyjDnCX/Rectangle-34.png" alt="" />
      <TextWrapper>
        <h1>Diwali 2022</h1>
        <p>49 Photos</p>
      </TextWrapper>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12  p-10 max-w-5xl">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm  btn-circle bg-orange-400 absolute right-2 top-2"
          >
            ✕
          </label>
          <Swiper
            pagination={true}
            autoplay={{ delay: 3000 }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <MainImage
                className=" w-[100%] h-[70vh] object-cover rounded-md "
                src="https://i.ibb.co/RPmsyzT/close-up-image-programer-working-his-desk-office.jpg"
                alt="slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MainImage
                className="w-[100%] h-[70vh] object-cover rounded-md"
                src="https://i.ibb.co/jyjDnCX/Rectangle-34.png"
                alt="slider"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.label`
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  transition: 0.5s;
  cursor: pointer;
`
const Image = styled.img`
  width: 300px;
  border-radius: 20px 20px 0 0;
  object-fit: cover;
`
const TextWrapper = styled.div`
  h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
  padding: 10px 0 15px 24px;
`
export default GalleryCard

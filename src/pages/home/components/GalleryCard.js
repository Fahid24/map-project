import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import { Pagination, EffectCoverflow, Autoplay } from "swiper"
import { MainImage } from "gatsby-plugin-image"

const GalleryCard = ({ title, images, id }) => {
  // console.log(images)
  return (
    <Wrapper htmlFor={id}>
      <Image src={images?.slice(-1)[0]?.file?.url} alt="" />
      <TextWrapper>
        <h1>{title}</h1>
        <p>{images?.length} Photos</p>
      </TextWrapper>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 p-[0] relative mt-16  max-w-5xl">
          <label
            htmlFor={id}
            className="btn btn-sm hover:text-white  btn-circle bg-white text-black font-bold text-md absolute z-10 right-2 top-2"
          >
            ✕
          </label>
          <Swiper
            pagination={true}
            autoplay={{ delay: 3000 }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {images?.map(u => (
              <SwiperSlide key={u.id}>
                <MainImage
                  className="object-cover lg:w-[100%] h-[500px] lg:h-[80vh] rounded-md"
                  src={u.file.url}
                  // alt="slider"
                />
              </SwiperSlide>
            ))}
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
  height: 230px;
  border-radius: 20px 20px 0 0;
  object-fit: cover;
`
const SlideImage = styled.div`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
    url(${({ src }) => src});
  background-repeat: no-repeat;
  /* background-position: center; */
  /* background-size: cover; */
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

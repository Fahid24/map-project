import React from "react"
import styled from "styled-components"
import img from "../../static/home/Rectangle 3.png"

const Slider = () => {
  return (
    <Wrapper className="relative">
      <div className="carousel  my-20  w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-8 absolute top-[750px] right-[650px]">
        <span className="h-[10px] w-[10px] bg-orange-500 rounded-full" />
        <span className="h-[10px] w-[10px] bg-white rounded-full" />
        <span className="h-[10px] w-[10px] bg-white rounded-full" />
      </div>
    </Wrapper>
  )
}

const Bar = styled.div`
  color: orange;
`
const Wrapper = styled.div``
export default Slider

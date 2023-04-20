import React from "react"
import styled from "styled-components"

const Featured = ({ title, des, video }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{des}</Description>
      <Video className="text-center">
        <iframe
          style={{ borderRadius: "50px" }}
          width="1255"
          height="550"
          src="https://www.youtube.com/embed/xNRJwmlRBNU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Video>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 150px 0 0 0;
  display: grid;
  justify-items: center;
`
const Video = styled.div`
  border-radius: 70px;
  margin-top: 70px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`
const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`
const Description = styled.div`
  margin-top: 35px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  max-width: 740px;
`
export default Featured

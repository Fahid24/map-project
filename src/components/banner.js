import React from "react"
import { useInView } from "react-intersection-observer"
import styled, { keyframes } from "styled-components"
import mobile from "../images/bg-mobile.jpg"

const Banner = ({ background, title, des }) => {
  const { ref, inView } = useInView()

  return (
    <Wrapper ref={ref} background={background} mobile={mobile}>
      <TextWrapper inView={inView}>
        <h1>{title}</h1>
        <p>{des}</p>
      </TextWrapper>
    </Wrapper>
  )
}

const bannerAnimation = keyframes`
0%{ transform: scale(0.8);
  filter: blur(20px);
   transform: translateY(-1000px)


}
50%{ transform: scale(1);
  filter: blur(0px);
  transform: translateY(100px)


}
100%{ transform: scale(1);
  filter: blur(0px);
  transform: translateY(0)


}`

const Wrapper = styled.section`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100%;
  margin-top: 90px;

  @media (max-width: 768px) {
    background-image: url(${({ mobile }) => mobile});
  }
`
const TextWrapper = styled.div`
  padding: 230px 490px 50px 60px;
  /* animation: ${bannerAnimation} 2s forwards ease-in-out; */

  animation: ${bannerAnimation} 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 96px;
    /* identical to box height */

    text-transform: capitalize;

    color: #ffffff;
  }

  p {
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    text-transform: capitalize;

    color: white;
  }
  @media (max-width: 768px) {
    padding: 150px 20px 100px 10px;
    h1 {
      font-size: 37px;
    }
    p {
      font-size: 27px;
      max-width: 400px;
    }
  }
`

export default Banner

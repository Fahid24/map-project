import React from "react"
import { useInView } from "react-intersection-observer"
import styled, { keyframes } from "styled-components"
// import mobile from "../images/bg-mobile.jpg"

const Banner = ({ background, title, des }) => {
  const { ref, inView } = useInView()

  return (
    <Wrapper className="bg-cover" ref={ref} background={background}>
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

100%{ transform: scale(1);
  filter: blur(0px);
  transform: translateY(0)


}`

const Wrapper = styled.section`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
    url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-size: 100%;
  margin-top: 90px;

  @media (max-width: 768px) {
    /* background-image: url(${({ mobile }) => mobile}); */
    background-size: cover;
    height: 90vh;
    object-fit: cover;
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
    font-size: 30px;
    text-transform: capitalize;
    line-height: 1.5;
    color: white;
  }
  @media (max-width: 768px) {
    padding: 350px 20px 50px 10px;
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

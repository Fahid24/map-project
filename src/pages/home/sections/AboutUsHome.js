import { Link } from "gatsby"
import React from "react"
import { useInView } from "react-intersection-observer"
import styled, { css, keyframes } from "styled-components"

const AboutUsHome = ({ title, des, img1, img2, img3 }) => {
  const { ref: image1, inView: img1Viewed } = useInView()
  const { ref: image2, inView: img2Viewed } = useInView()
  const { ref: image3, inView: img3Viewed } = useInView()
  return (
    <MainWrapper ref={image1} className="relative">
      <Wrapper ref={image2}>
        <TextWrapper img1Viewed={img1Viewed}>
          <h1>{title}</h1>
          <p>{des}</p>
        </TextWrapper>
        <Link to="/about">
          {" "}
          <button ref={image3}>EXPLORE MORE ABOUT US</button>
        </Link>
        <Image3
          img3Viewed={img3Viewed}
          className="-ml-12 mt-[32px] lg:visible"
          src={img3}
          alt=""
        />
      </Wrapper>
      <Image1
        img1Viewed={img1Viewed}
        className="big-img ml-14 mb-[100px] max-w-[700px]"
        src={img2}
        alt=""
      />

      <Image2
        img2Viewed={img2Viewed}
        className="absolute top-[102px] right-[220px]"
        src={img1}
        alt=""
      />
    </MainWrapper>
  )
}

export default AboutUsHome

const mainAnimation = keyframes`
from {
  filter: blur(50px);
  transform: translateY(20px);
}
to{
  filter: blur(0px);
  transform: translateY(0px);
}
`
const cardAnimation = keyframes`
from{ transform: translateX(5000px)}
to{ transform: translateX(0)}
`
const img2Animation = keyframes`
from{ transform: translateY(1000px)}
to{ transform: translateY(0)}
`
const img3Animation = keyframes`
from{ transform: translateY(500px)}
to{ transform: translateY(0)}
`

const MainWrapper = styled.section`
  overflow: hidden;
  background: #ed8f1d;
  display: grid;
  grid-template-columns: 44% 56%;
  .big-img {
    margin-top: 350px;
  }
  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    justify-content: center;
    img {
      display: none;
    }
  }
`
const Wrapper = styled.section`
  padding: 170px 0 0 100px;
  display: grid;
  justify-items: start;
  gap: 70px;

  button {
    max-width: fit-content;
    max-height: 80px;
    padding: 20px 50px;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    text-transform: capitalize;

    color: #ed8f1d;
    background: #ffffff;
    border-radius: 10px;
    &:focus {
      outline: 2px solid white;
      border: 3px solid #ed8f1d;
    }
  }
  @media (max-width: 768px) {
    padding: 50px 0 50px 0px;
    justify-items: center;

    button {
      max-width: 100%;
      max-height: auto;
      padding: 10px 30px;
      font-size: 22px;
      font-weight: 700;
    }
  }
`
const TextWrapper = styled.section`
  display: grid;
  gap: 30px;
  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    text-transform: capitalize;
    color: #ffffff;
  }

  p {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: white;
  }
  animation: ${({ img1Viewed }) =>
    img1Viewed
      ? css`
          ${mainAnimation} 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards
        `
      : "none"};

  @media (max-width: 768px) {
    padding: 10px;
  }
`

const Image1 = styled.img`
  animation: ${({ img1Viewed }) =>
    img1Viewed
      ? css`
          ${cardAnimation} 3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards
        `
      : "none"};
`
const Image2 = styled.img`
  animation: ${({ img2Viewed }) =>
    img2Viewed
      ? css`
          ${img2Animation} 5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards
        `
      : "none"};
`
const Image3 = styled.img`
  animation: ${({ img3Viewed }) =>
    img3Viewed
      ? css`
          ${img3Animation} 3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards
        `
      : "none"};
`

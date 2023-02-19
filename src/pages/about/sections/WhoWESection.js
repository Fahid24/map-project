import { Link } from "gatsby"
import React from "react"
import { useInView } from "react-intersection-observer"
import styled, { css, keyframes } from "styled-components"
import logo from "../../../../static/logos/map-logo-removebg-preview 1.png"

const WhoWESection = ({ title, des, img1, img2, img3, img4 }) => {
  const { ref, inView } = useInView()

  return (
    <MainWrapper>
      <Wrapper1 inView={inView}>
        <h1>{title}</h1>
        <p ref={ref}>{des}</p>
        <Link to="/members">
          {" "}
          <button className="">Become a member</button>
        </Link>{" "}
      </Wrapper1>
      <Wrapper2>
        <ImgWrapper>
          <Image inView={inView} src={img2} alt="" />
          <img src={logo} alt="" />
          <Image inView={inView} src={img3} alt="" />
        </ImgWrapper>
        <ImgWrapper>
          <Image inView={inView} src={img1} alt="" />
          <Image inView={inView} src={img4} alt="" />
        </ImgWrapper>
      </Wrapper2>
    </MainWrapper>
  )
}

const imageAnimation = keyframes`
0%{ transform: scale(0.8);
  filter: blur(20px);
   transform: translateX(2000px)


}

100%{ transform: scale(1);
  filter: blur(0px);
  transform: translateX(0)


}`
const textAnimation = keyframes`
0%{ transform: scale(0.8);
  filter: blur(20px);
   


}

100%{ transform: scale(1);
  filter: blur(0px);
  


}`

const MainWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 130px;
  padding: 150px 100px;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    padding: 100px 20px;
    text-align: center;
  }
`
const Wrapper1 = styled.div`
  display: grid;
  gap: 30px;
  justify-items: start;
  animation: ${({ inView }) =>
    inView
      ? css`
          ${textAnimation} 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards
        `
      : "none"};
  h1 {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    /* identical to box height */

    text-transform: capitalize;

    color: #ed8f1d;
  }

  p {
    max-width: 652px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-transform: capitalize;
  }

  button {
    background: #ed8f1d;
    border-radius: 10px;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    text-transform: capitalize;

    color: #ffffff;
    padding: 20px 90px;
    &:focus {
      outline: 2px solid #ed8f1d;
      border: 2px solid white;
    }
  }
  @media (max-width: 768px) {
    justify-items: center;
    h1 {
      font-weight: 600;
      font-size: 37px;
    }
    p {
      text-align: justify;
    }
    button {
      padding: 10px 50px;
    }
  }
`
const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`
const ImgWrapper = styled.div`
  display: grid;
  gap: 50px;
`
const Image = styled.img`
  animation: ${({ inView }) =>
    inView
      ? css`
          ${imageAnimation} 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards
        `
      : "none"};
`
export default WhoWESection

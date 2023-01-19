import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const AboutUsHome = ({ title, des, img1, img2, img3 }) => {
  return (
    <MainWrapper className="relative">
      <Wrapper>
        <TextWrapper>
          <h1>{title}</h1>
          <p>{des}</p>
        </TextWrapper>
        <Link to="/about">
          {" "}
          <button>EXPLORE MORE ABOUT US</button>
        </Link>
        <img className="-ml-12 mt-[32px]" src={img3} alt="" />
      </Wrapper>
      <img
        className="big-img ml-14 mb-[100px] max-w-[700px]"
        src={img2}
        alt=""
      />

      <img className="absolute top-[102px] right-[220px]" src={img1} alt="" />
    </MainWrapper>
  )
}

export default AboutUsHome

const MainWrapper = styled.section`
  background: #ed8f1d;
  display: grid;
  grid-template-columns: 44% 56%;
  .big-img {
    margin-top: 350px;
  }
`
const Wrapper = styled.section`
  padding: 170px 0 0 100px;
  display: grid;
  justify-items: start;
  gap: 70px;

  img {
  }

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
`

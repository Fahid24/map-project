import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../../../../static/logos/map-logo-removebg-preview 1.png"

const WhoWESection = ({ title, des, img1, img2, img3, img4 }) => {
  return (
    <MainWrapper>
      <Wrapper1>
        <h1>{title}</h1>
        <p>{des}</p>
        <Link to="/members">
          {" "}
          <button className="">Become a member</button>
        </Link>{" "}
      </Wrapper1>
      <Wrapper2>
        <ImgWrapper>
          <img src={img2} alt="" />
          <img src={logo} alt="" />
          <img src={img3} alt="" />
        </ImgWrapper>
        <ImgWrapper>
          <img src={img1} alt="" />
          <img src={img4} alt="" />
        </ImgWrapper>
      </Wrapper2>
    </MainWrapper>
  )
}
const MainWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 130px;
  padding: 150px 100px;
`
const Wrapper1 = styled.div`
  display: grid;
  gap: 30px;
  justify-items: start;
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
  }
`
const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`
const ImgWrapper = styled.div`
  display: grid;
  gap: 50px;
`

export default WhoWESection

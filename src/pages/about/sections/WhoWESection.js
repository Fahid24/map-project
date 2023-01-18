import React from "react"
import styled from "styled-components"
import logo from "../../../../static/logos/map-logo-removebg-preview 1.png"
import img1 from "../../../images/Rectangle 21.png"
import img2 from "../../../images/Rectangle 22.png"
import img3 from "../../../images/Rectangle 23.png"
import img4 from "../../../images/Rectangle 24.png"

const WhoWESection = () => {
  return (
    <MainWrapper>
      <Wrapper1>
        <h1>Who are we</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button>Become Our Memeber</button>
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

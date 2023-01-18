import React from "react"
import styled from "styled-components"
import committee1 from "../../../../static/home/Rectangle 7 (2).png"
import committee2 from "../../../../static/home/Rectangle 7 (1).png"
import committee3 from "../../../../static/home/Rectangle 7.png"

const AboutCommittee = () => {
  return (
    <MainWrapper>
      <TextWrapper>
        <h1>COMMITTEE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          hendrerit elit quis metus fermentum vehicula. Ut malesuada suscipit
          elit quis interdum.
        </p>
      </TextWrapper>
      <Wrapper>
        <ImgWrapper>
          <img src={committee1} alt="" />

          <div className="committee1">
            <h2>Narendra Modi</h2>
            <p>Prime Minister</p>
          </div>
        </ImgWrapper>
        <ImgWrapper>
          <img src={committee2} alt="" />
          <div className="committee2">
            <h2>Narendra Modi</h2>
            <p>Prime Minister</p>
          </div>
        </ImgWrapper>
        <ImgWrapper>
          <img src={committee3} alt="" />
          <div className="committee3">
            <h2>Narendra Modi</h2>
            <p>Prime Minister</p>
          </div>
        </ImgWrapper>
        <ImgWrapper>
          <img src={committee1} alt="" />

          <div className="committee1">
            <h2>Narendra Modi</h2>
            <p>Prime Minister</p>
          </div>
        </ImgWrapper>
        <ImgWrapper>
          <img src={committee2} alt="" />
          <div className="committee2">
            <h2>Narendra Modi</h2>
            <p>Prime Minister</p>
          </div>
        </ImgWrapper>
        <ImgWrapper>
          <img src={committee3} alt="" />
          <div className="committee3">
            <h2>Narendra Modi</h2>
            <p>Prime Minister</p>
          </div>
        </ImgWrapper>
        <ImgWrapper>
          <img src={committee1} alt="" />

          <div className="committee1">
            <h2>Narendra Modi</h2>
            <p>Prime Minister</p>
          </div>
        </ImgWrapper>
        <ImgWrapper>
          <img src={committee2} alt="" />
          <div className="committee2">
            <h2>Narendra Modi</h2>
            <p>Prime Minister</p>
          </div>
        </ImgWrapper>
        <ImgWrapper>
          <img src={committee3} alt="" />
          <div className="committee3">
            <h2>Narendra Modi</h2>
            <p>Prime Minister</p>
          </div>
        </ImgWrapper>
      </Wrapper>
    </MainWrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  gap: 80px;
`

const MainWrapper = styled.section`
  display: grid;
  gap: 80px;
  padding: 50px 0 150px 0;
`
const TextWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 30px;
  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    max-width: 865px;
  }
`

const ImgWrapper = styled.div`
  position: relative;

  img {
    border-radius: 20px;
  }

  div {
    position: absolute;
    top: 320px;
    left: 50px;

    h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      color: white;
    }
    p {
      font-size: 24px;
      line-height: 36px;
      /* identical to box height */
      color: #ed8f1d;
    }
  }
`
const Explore = styled.p`
  cursor: pointer;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #f49016;
`
export default AboutCommittee

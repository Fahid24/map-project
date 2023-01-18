import React from "react"
import styled from "styled-components"
import event1 from "../../../../static/home/Ellipse 6.png"
import event2 from "../../../../static/home/Ellipse 4.png"
import event3 from "../../../../static/home/Ellipse 7.png"

const AboutUsHome = () => {
  return (
    <MainWrapper className="relative">
      <Wrapper>
        <TextWrapper>
          <h1>ABOUT US</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </TextWrapper>
        <button>EXPLORE MORE ABOUT US</button>
        <img className="-ml-12 mt-[32px]" src={event3} alt="" />
      </Wrapper>
      <img
        className="big-img ml-14 mb-[100px] max-w-[700px]"
        src={event2}
        alt=""
      />

      <img className="absolute top-[102px] right-[220px]" src={event1} alt="" />
    </MainWrapper>
  )
}
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
export default AboutUsHome

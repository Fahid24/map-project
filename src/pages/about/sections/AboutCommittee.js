import React from "react"
import styled from "styled-components"

const AboutCommittee = ({ title, des, members }) => {
  return (
    <MainWrapper>
      <TextWrapper>
        <h1>{title}</h1>
        <p>{des}</p>
      </TextWrapper>
      <Wrapper>
        {members?.map(member => (
          <ImgWrapper key={member.id}>
            <img src={member.committeeImage.url} alt="" />

            <div className="committee1">
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
          </ImgWrapper>
        ))}
      </Wrapper>
    </MainWrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  gap: 80px;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
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
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
`

export default AboutCommittee

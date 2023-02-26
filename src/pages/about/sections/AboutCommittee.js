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
          <ImgWrapper img={member.committeeImage.url} key={member.id}>
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
    padding: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    max-width: 865px;
  }
  @media (max-width: 768px) {
    h1 {
      font-weight: 700;
      font-size: 34px;
    }
  }
`

const ImgWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: flex-end;
  border-radius: 20px;
  width: 351px;
  height: 445px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
    url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 351px;
  img {
    max-width: 351px;

    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      #000000 100%
    );
  }

  div {
    padding-bottom: 30px;
    h2 {
      font-weight: 600;
      font-size: 30px;
      line-height: 48px;
      color: white;
    }
    p {
      font-size: 24px;
      line-height: 36px;
      /* identical to box height */
      color: #ed8f1d;
    }
    @media (max-width: 768px) {
    }
  }
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
  @media (max-width: 768px) {
    &:hover {
      transform: scale(1);
    }
  }
`

export default AboutCommittee

import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Committee = ({ committees, title, des }) => {
  return (
    <MainWrapper>
      <TextWrapper>
        <h1>{title}</h1>
        <p>{des}</p>
      </TextWrapper>
      <Wrapper>
        {committees?.map(member => (
          <ImgWrapper img={member.committeeImage.url} key={member.id}>
            {/* <img src={member.committeeImage.url} alt="" /> */}

            <div className="committee1">
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
          </ImgWrapper>
        ))}
      </Wrapper>

      <Link to="/about">
        <Explore>EXPLORE MORE</Explore>
      </Link>
    </MainWrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 80px;
  @media (max-width: 768px) {
    display: grid;
  }
`

const MainWrapper = styled.section`
  display: grid;
  gap: 80px;
  padding: 150px 0;
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
const Explore = styled.p`
  cursor: pointer;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #f49016;
`
export default Committee

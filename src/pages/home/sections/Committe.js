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
        {committees?.map(committee => (
          <ImgWrapper key={committee.id}>
            <img src={committee.committeeImage.url} alt="" />

            <div className="committee1">
              <h2>{committee.name}</h2>
              <p>{committee.position}</p>
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
export default Committee

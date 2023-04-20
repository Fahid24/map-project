import React from "react"
import styled from "styled-components"

const EventsCard = ({ img, title, des, date }) => {
  return (
    <Wrapper>
      <img className="" src={img} alt="" />
      <TextWrapper>
        <h2>{title?.slice(0, 50)}</h2>
        <p>{des}. . .</p>
        <span>{date}</span>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-shadow: 0px 4px 20px 10px rgba(97, 97, 97, 0.05);
  border-radius: 6px;
  display: grid;
  gap: 20px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 378px;
    height: 216px;
    border-radius: 6px 6px 0px 0px;
  }
`
const TextWrapper = styled.div`
  display: grid;
  gap: 10px;
  padding: 30px;
  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */

    text-transform: uppercase;
  }
  p {
    max-width: 300px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
  span {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
`
export default EventsCard

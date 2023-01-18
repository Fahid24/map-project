import React from "react"
import styled from "styled-components"

const EventsCard = ({ img, title, des, date }) => {
  return (
    <Wrapper>
      <img src={img} alt="" />
      <TextWrapper>
        <h2>{title}</h2>
        <p>{des}</p>
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
  img {
    max-width: 400px;
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

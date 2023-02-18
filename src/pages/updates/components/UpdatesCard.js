import React from "react"
import styled from "styled-components"

const UpdatesCard = ({ title, date, img }) => {
  return (
    <Wrapper img={img}>
      {/* <img src={img} /> */}
      <h2>{title}</h2>
      <p>{date}</p> 
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  padding: 170px 30px 20px 30px;
  border-radius: 20px;
  h2 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    text-transform: capitalize;

    color: #ffffff;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    text-transform: capitalize;

    color: #ed8f1d;
  }
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
`
export default UpdatesCard

import React from "react"
import styled from "styled-components"

const UpdatesCard = ({ title, date, img }) => {
  return (
    <Wrapper img={img}>
      {/* <img src={img} /> */}
      <h2>{title?.slice(0, 50)}. . .</h2>
      <p>{date}</p>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
    url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 470px 280px;
  padding: 170px 30px 20px 30px;
  background-position: center top;
  border-radius: 20px;
  height: 280px;
  width: 460px;
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
  @media (max-width: 768px) {
    width: auto;
    padding: 150px 20px 20px 20px;
    h2 {
      font-size: 20px;
    }
  }
`
export default UpdatesCard

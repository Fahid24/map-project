import React from "react"
import styled from "styled-components"
import { BsCheckCircleFill } from "react-icons/bs"

const PricingCard = ({ title, des, price, facilities, color }) => {
  return (
    <MainWrapper color={color}>
      <div
        className={`pb-[19px] border-dashed border-b-2 ${
          color ? "white" : "border-[#ed8f1d]"
        }`}
      >
        <Wrapper1 color={color}>
          <h2>{title}</h2>
          <p>{des}</p>
          <h1>{price}</h1>
        </Wrapper1>
      </div>
      <Wrapper2>
        <ul>
          {facilities?.map((facility, index) => (
            <li key={index}>
              <Icon color={color} size={25} />

              <span>{facility}</span>
            </li>
          ))}
        </ul>
        <Button color={color}>become a member</Button>
      </Wrapper2>
    </MainWrapper>
  )
}
const MainWrapper = styled.div`
  ${({ color }) => color && "background:#ED8F1D;;"}
  ${({ color }) => color && "color:white;"}
  ${({ color }) => color && "transform: scale(1.06);"}

  border: 1px solid #ed8f1d;
  display: grid;
  gap: 19px;
  border-radius: 10px;
`
const Icon = styled(BsCheckCircleFill)`
  color: ${({ color }) => !color && "#ed8f1d"};
`

const Wrapper1 = styled.div`
  display: grid;
  gap: 15px;
  padding: 50px 50px 0 50px;

  /* border-bottom: 1px dashed white; */
  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    /* identical to box height */

    text-transform: lowercase;
  }

  h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    /* identical to box height */

    text-transform: capitalize;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-transform: capitalize;
  }
`

const Wrapper2 = styled.div`
  padding: 0 50px 50px 50px;

  ul {
    display: grid;
    gap: 15px;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      span {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        /* identical to box height */

        text-transform: capitalize;
      }
    }
  }
`

const Button = styled.button`
  margin-top: 30px;
  background-color: ${({ color }) => (color ? "white" : "#ED8F1D")};

  color: ${({ color }) => (color ? "#ED8F1D" : "white")};
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  text-transform: capitalize;
  padding: 10px 50px;
  border: 1px solid #ed8f1d;
  border-radius: 10px;
`

export default PricingCard

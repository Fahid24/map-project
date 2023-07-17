import React from "react"
import styled from "styled-components"
import { BsCheckCircleFill } from "react-icons/bs"
import { Link } from "gatsby"

const PricingCard = ({ title, des, price, facilities, color, slug }) => {
  // console.log(amount)

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
        <Link to={"/" + slug}>
          <Button color={color}>become a member</Button>
        </Link>
      </Wrapper2>
    </MainWrapper>
  )
}
const MainWrapper = styled.div`
  width: 460px;
  ${({ color }) => (color ? "background:#ED8F1D;" : "white;")}
  ${({ color }) => color && "color:white;"}

  border: 1px solid #ed8f1d;
  display: grid;
  gap: 19px;
  border-radius: 10px;
  transition: 0.5s;
  @media (max-width: 768px) {
    transform: scale(1);
  }

  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
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
    max-width: 300px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
  @media (max-width: 768px) {
    padding: 30px 30px 0 30px;
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
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0 30px 30px 30px;
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
  &:hover {
  }
  &:focus {
    outline: 2px solid ${({ color }) => (color ? "white" : "#ED8F1D")};
    border: 3px solid ${({ color }) => (color ? "#ED8F1D" : "white")};
  }
`

export default PricingCard

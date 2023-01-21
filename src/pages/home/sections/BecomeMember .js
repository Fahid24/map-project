import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const BecomeMember = ({ title, image }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <h1>{title}</h1>
        <Link to="/members">
          <button className="">Become a member</button>
        </Link>
      </TextWrapper>
      <img src={image} alt="" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 0 100px;
  margin-bottom: 100px;
  background: #ed8f1d;
  padding: 20px 20px 20px 50px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`
const TextWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  h1 {
    max-width: 600px;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    text-transform: capitalize;

    color: #ffffff;
  }
  button {
    justify-self: start;
    font-weight: 500;
    font-size: 33px;
    /* identical to box height */
    padding: 10px 90px;
    border-radius: 40px;
    text-transform: capitalize;
    background: white;
    color: #ed8f1d;
  }
`

export default BecomeMember

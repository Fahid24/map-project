import React from "react"
import styled from "styled-components"
import img from "../../../../static/home/Rectangle 12.png"

const BecomeMember = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <h1>Become a member and enjoy all the benifits</h1>
        <button>Become a member</button>
      </TextWrapper>
      <img src={img} alt="" />
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

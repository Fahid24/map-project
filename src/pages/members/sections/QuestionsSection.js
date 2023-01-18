import React from "react"
import styled from "styled-components"

const QuestionsSection = () => {
  return (
    <Wrapper>
      <h1>
        If you have any questions or suggestion we’d love to Hear from you
      </h1>
      <button>Become a member</button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 50px 90px 90px 90px;
  display: flex;
  align-items: center;
  padding: 25px 60px;
  background: #ed8f1d;
  border-radius: 40px;
  gap: 30px;
  h1 {
    max-width: 650px;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    text-transform: capitalize;
    color: #ffffff;
  }

  button {
    padding: 12px 60px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-transform: capitalize;
    background: white;
    color: #ed8f1d;
    border-radius: 40px;
  }
`
export default QuestionsSection

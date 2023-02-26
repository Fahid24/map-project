import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const QuestionsSection = () => {
  return (
    <Wrapper>
      <h1>
        If you have any questions or suggestion we’d love to Hear from you
      </h1>
      <Button to="/contact">Contact with us</Button>
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
    color: #ffffff;
  }

  @media (max-width: 768px) {
    margin: 0;
    border-radius: 0;
    flex-direction: column;
    padding: 100px 20px;
    text-align: center;
    h1 {
      font-size: 30px;
      font-weight: 600;
      line-height: 1.5;
    }
  }
`
const Button = styled(Link)`
  padding: 12px 60px;
  font-weight: 500;
  font-size: 26px;
  line-height: 36px;
  text-transform: capitalize;
  background: white;
  color: #ed8f1d;
  border-radius: 40px;
  cursor: pointer;
`
export default QuestionsSection

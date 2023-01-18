import React from "react"
import styled from "styled-components"
import background from "../../../images/img_lights.jpg"

const AboutHero = () => {
  return (
    <Wrapper background={background}>
      <TextWrapper>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          hendrerit elit quis metus fermentum vehicula. Ut malesuada suscipit
          elit quis interdum.
        </p>
      </TextWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100%;
  margin-top: 90px;
`
const TextWrapper = styled.div`
  padding: 230px 490px 50px 60px;

  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 96px;
    /* identical to box height */

    text-transform: capitalize;

    color: #ffffff;
  }

  p {
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    text-transform: capitalize;

    color: #d3d3d3;
  }
`
export default AboutHero

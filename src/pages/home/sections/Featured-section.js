import React from "react"
import styled from "styled-components"

const Featured = () => {
  return (
    <Wrapper>
      <Title>Featured Content</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        hendrerit elit quis metus fermentum vehicula. Ut malesuada suscipit elit
        quis interdum.
      </Description>
      <img
        src="https://i.ibb.co/RPmsyzT/close-up-image-programer-working-his-desk-office.jpg"
        alt=""
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 150px 0 0 0;
  display: grid;
  justify-items: center;
  img {
    margin-top: 50px;
    width: 1255px;
    height: 630px;
    object-fit: cover;
    border-radius: 70px;
  }
`
const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  text-transform: uppercase;
  text-align: center;
`
const Description = styled.div`
  margin-top: 35px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  max-width: 740px;
`
export default Featured

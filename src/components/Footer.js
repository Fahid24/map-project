import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import logo from "../../static/logos/map-logo-removebg-preview 1.png"

const Footer = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <ContentWrapper1>
          <div>
            <img src={logo} alt="" />
            <h1>Marathi association Perth</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            hendrerit elit quis metus fermentum vehicula. Ut malesuada suscipit
            elit quis interdum.
          </p>
        </ContentWrapper1>

        <ContentWrapper2 className="mt-12">
          <h3>Important Links</h3>
          <ul>
            <li>Upcoming events</li>
            <li>Latest News</li>
            <li>Gallary</li>
            <li>About Us</li>
          </ul>
        </ContentWrapper2>
        <ContentWrapper2 className="mt-12">
          <h3>Contact us</h3>
          <ul>
            <li>info@Marathiassosicationperth.com.au</li>
            <li>0457849263</li>
            <li>4 Tanga Close Southern river</li>
          </ul>
        </ContentWrapper2>
      </Wrapper>
      <p className="text-center mt-[35px] text-[#B6B6B6]">
        © All rights reserved by marathi assosication Perth
      </p>
      <p className="text-center pt-2 text-[#B6B6B6]">
        website developed by PrimeSoftech
      </p>
    </MainWrapper>
  )
}

const MainWrapper = styled.footer`
  background: #101010;
  color: white;
  padding: 40px 50px 10px 50px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`
const ContentWrapper1 = styled.div`
  display: grid;
  gap: 30px;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 1.2;
    text-transform: capitalize;
    max-width: 190px;
    margin: 0;
    color: #ffffff;
  }
  p {
    max-width: 356px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-transform: capitalize;
    color: #d3d3d3;
  }
`
const ContentWrapper2 = styled.div`
  display: grid;
  gap: 10px;
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    text-transform: capitalize;
  }

  ul {
    display: grid;
    gap: 5px;
  }

  li {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    color: #b6b6b6;
    text-transform: capitalize;
  }
`
const Wrapper3 = styled.div``

export default Footer

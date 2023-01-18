import React from "react"
import styled from "styled-components"
import EventsCard from "../components/EventsCard"
import img1 from "../../../../static/home/Rectangle 5 (1).png"
import img2 from "../../../../static/home/Rectangle 5 (2).png"
import img3 from "../../../../static/home/Rectangle 5 (3).png"
import { Link } from "gatsby"

const HomeEvents = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <h1>UPCOMING EVENTS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          hendrerit elit quis metus fermentum vehicula. Ut malesuada suscipit
          elit quis interdum.
        </p>
      </TextWrapper>
      <CardWrapper>
        <EventsCard
          img={img1}
          title={"Lorem ipsum dolor sit amet"}
          des={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit"
          }
          date={"18/02/2023"}
        />
        <EventsCard
          img={img2}
          title={"Lorem ipsum dolor sit amet"}
          des={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit"
          }
          date={"18/02/2023"}
        />
        <EventsCard
          img={img3}
          title={"Lorem ipsum dolor sit amet"}
          des={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit"
          }
          date={"18/02/2023"}
        />
      </CardWrapper>
      <Explore to="events">EXPLORE MORE</Explore>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 77px;
  padding: 120px 0;

  p {
  }
`
const TextWrapper = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 30px;
  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    max-width: 865px;
  }
`
const CardWrapper = styled.div`
  margin-left: -20px;
  display: flex;
  padding: 0 65px;
  gap: 40px;
  justify-content: center;
`
const Explore = styled(Link)`
  cursor: pointer;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  text-transform: uppercase;
  text-align: center;
  color: #f49016;
`
export default HomeEvents

import React from "react"
import styled from "styled-components"
import img1 from "../../../../static/home/Rectangle 5 (1).png"
import img2 from "../../../../static/home/Rectangle 5 (2).png"
import img3 from "../../../../static/home/Rectangle 5 (3).png"
import Banner from "../../../components/banner"
import EventsCard from "../../home/components/EventsCard"
import background from "../../../images/img_lights.jpg"

const EventsSection = () => {
  return (
    <Wrapper>
      <Banner
        background={background}
        title={"UPCOMING EVENTS"}
        des={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit elit quis metus fermentum vehicula. Ut malesuada suscipit elit quis interdum."
        }
      />
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
      <Explore>EXPLORE MORE</Explore>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 77px;
  padding: 0 0 120px 0;

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
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 0 65px;
  gap: 40px;
  justify-items: center;
`
const Explore = styled.p`
  cursor: pointer;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  text-transform: uppercase;
  text-align: center;
  color: #f49016;
`
export default EventsSection

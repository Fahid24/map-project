import React from "react"
import styled from "styled-components"
import EventsCard from "../components/EventsCard"

import { Link } from "gatsby"

const HomeEvents = ({ title, des, events }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <h1>{title}</h1>
        <p>{des}</p>
      </TextWrapper>
      <CardWrapper>
        {events.map(event => (
          <EventsCard
            key={event.id}
            img={event.eventImage.url}
            title={event.title}
            des={event.eventDescription}
            date={event.eventDate.slice(0, 10)}
          />
        ))}
      </CardWrapper>
      <Link to="/events">
        <Explore>EXPLORE MORE</Explore>
      </Link>
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
export default HomeEvents

import React from "react"
import styled from "styled-components"

import Banner from "../../../components/banner"
import EventsCard from "../../home/components/EventsCard"

const EventsSection = ({ title, des, banner, events }) => {
  // console.log(events)
  return (
    <Wrapper>
      <Banner background={banner} title={title} des={des} />
      <CardWrapper>
        {events?.map(event => (
          <EventsCard
            key={event.id}
            img={event.eventImage.url}
            title={event.title}
            des={event.eventDescription}
            date={event.eventDate.slice(0, 10)}
          />
        ))}
      </CardWrapper>
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

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 0 65px;
  gap: 40px;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    padding: 0 20px;
    gap: 50px;
  }
`

export default EventsSection

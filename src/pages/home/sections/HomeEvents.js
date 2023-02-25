import React from "react"
import styled, { css, keyframes } from "styled-components"
import EventsCard from "../components/EventsCard"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"

const HomeEvents = props => {
  const { title, des, events } = props
  const { ref, inView } = useInView()

  return (
    <Wrapper>
      <TextWrapper>
        <h1>{title}</h1>
        <p>{des}</p>
      </TextWrapper>
      <CardWrapper inView={inView} ref={ref}>
        {events?.map(event => (
          <Link to={`/${event.title}/${event.id}`}>
            <EventsCard
              key={event.id}
              img={event.eventImage.url}
              title={event.title}
              des={event.eventDescription?.eventDescription?.slice(0, 50)}
              date={event.eventDate?.slice(0, 10)}
            />
          </Link>
        ))}
      </CardWrapper>
      <Link to="/events">
        <Explore>EXPLORE MORE</Explore>
      </Link>
    </Wrapper>
  )
}

// const cardAnimation = keyframes`
// from{ transform: translateX(-500px)}
// to{ transform: translateX(0)}
// `

// const mainAnimation = keyframes`
// from {
//   filter: blur(10px);
//   transform: translateY(-20px);
// }
// to{
//   filter: blur(0px);
//   transform: translateY(0px);
// }
// `

const cardAnimation = keyframes`
from{ transform: scale(0.8);
  filter: blur(20px);

}
to{ transform: scale(1);
  filter: blur(0px);

}`
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
  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
    p {
      padding: 0 10px;
    }
  }
`
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 0 65px;
  gap: 40px;
  justify-content: center;
  animation: ${({ inView }) =>
    inView
      ? css`
          ${cardAnimation} 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards
        `
      : "none"};
  @media (max-width: 768px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    justify-items: center;
  }
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

import { Link } from "gatsby"
import React from "react"
import { useInView } from "react-intersection-observer"
import styled, { keyframes } from "styled-components"
import UpdatesCard from "../components/UpdatesCard"

const UpdatesSection = ({ title, des, updates }) => {
  // console.log(updates)
  const { ref, inView } = useInView()
  // console.log(updates)
  return (
    <MainWrapper ref={ref}>
      <TextWrapper inView={inView}>
        <h1>{title}</h1>
        <p>{des}</p>
      </TextWrapper>
      <CardsWrapper>
        {updates?.map(update => (
          <Link to={`/${update.title.title.slice(0, 10)}/${update.id}`}>
            <UpdatesCard
              key={update.id}
              img={update.updateImage.url}
              title={update.title.title}
              date={update.date?.slice(0, 10)}
            />
          </Link>
        ))}
      </CardsWrapper>
    </MainWrapper>
  )
}

const textAnimation = keyframes`
0%{ transform: scale(0.8);
  filter: blur(20px);


}
100%{ transform: scale(1);
  filter: blur(0px);
  transform: scale(1);

}`

const MainWrapper = styled.section`
  padding: 180px;
  display: grid;
  gap: 70px;
  @media (max-width: 768px) {
    margin-top: 80px;
    padding: 50px 20px;
    gap: 50px;
  }
`
const TextWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 30px;
  animation: ${textAnimation} 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;

  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    /* identical to box height */

    text-transform: uppercase;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    text-transform: capitalize;
  }
  @media (max-width: 768px) {
    h1 {
      font-weight: 700;
      font-size: 34px;
      line-height: 60px;
      /* identical to box height */

      text-transform: uppercase;
    }
  }
`
const CardsWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: auto auto;
  gap: 65px;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    padding-bottom: 100px;
  }
`

export default UpdatesSection

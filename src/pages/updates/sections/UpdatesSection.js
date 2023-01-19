import React from "react"
import styled from "styled-components"
import UpdatesCard from "../components/UpdatesCard"

const UpdatesSection = ({ title, des, updates }) => {
  console.log(updates)
  return (
    <MainWrapper>
      <TextWrapper>
        <h1>{title}</h1>
        <p>{des}</p>
      </TextWrapper>
      <CardsWrapper>
        {updates?.map(update => (
          <UpdatesCard
            key={update.id}
            img={update.updateImage.url}
            title={update.title}
            date={update.date.slice(0, 10)}
          />
        ))}
      </CardsWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.section`
  padding: 180px;
  display: grid;
  gap: 70px;
`
const TextWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 30px;
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
`
const CardsWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: auto auto;
  gap: 65px;
`

export default UpdatesSection

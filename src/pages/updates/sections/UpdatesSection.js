import React from "react"
import styled from "styled-components"
import img from "./Rectangle 5 (1).png"
import UpdatesCard from "../components/UpdatesCard"

const UpdatesSection = () => {
  return (
    <MainWrapper>
      <TextWrapper>
        <h1>Latest updates</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          hendrerit elit quis metus fermentum vehicula. Ut malesuada suscipit
          elit quis interdum.
        </p>
      </TextWrapper>
      <CardsWrapper>
        <UpdatesCard
          img={img}
          title={"Lorem ipsum dolor sit amet, consectetur adipiscing "}
          date={"19/02/2023"}
        />
        <UpdatesCard
          img={img}
          title={"Lorem ipsum dolor sit amet, consectetur adipiscing "}
          date={"19/02/2023"}
        />
        <UpdatesCard
          img={img}
          title={"Lorem ipsum dolor sit amet, consectetur adipiscing "}
          date={"19/02/2023"}
        />
        <UpdatesCard
          img={img}
          title={"Lorem ipsum dolor sit amet, consectetur adipiscing "}
          date={"19/02/2023"}
        />
        <UpdatesCard
          img={img}
          title={"Lorem ipsum dolor sit amet, consectetur adipiscing "}
          date={"19/02/2023"}
        />
        <UpdatesCard
          img={img}
          title={"Lorem ipsum dolor sit amet, consectetur adipiscing "}
          date={"19/02/2023"}
        />
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

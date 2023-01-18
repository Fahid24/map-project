import React from "react"
import styled from "styled-components"
import PricingCard from "../components/pricingCard"

const PriceSection = () => {
  return (
    <MainWrapper>
      <PricingCard
        title={"Solo"}
        des={"Nullam hendrerit elit quis metus fermentum "}
        price={"$29/y"}
        facilities={[
          "free entry to all events",
          "Nullam hendrerit elit quis",
          "Nullam hendrerit elit quis",
        ]}
      />
      <PricingCard
        title={"family"}
        des={"Nullam hendrerit elit quis metus fermentum "}
        price={"$59/y"}
        facilities={[
          "free entry to all events",
          "Nullam hendrerit elit quis",
          "Nullam hendrerit elit quis",
        ]}
        color={"color"}
      />
      <PricingCard
        title={"student"}
        des={"Nullam hendrerit elit quis metus fermentum "}
        price={"$19/y"}
        facilities={[
          "free entry to all events",
          "Nullam hendrerit elit quis",
          "Nullam hendrerit elit quis",
        ]}
      />
    </MainWrapper>
  )
}

const MainWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 100px;
`
export default PriceSection

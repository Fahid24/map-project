import React from "react"
import styled from "styled-components"
import PricingCard from "../components/pricingCard"

const PriceSection = ({ cards }) => {
  // console.log(cards)
  return (
    <MainWrapper id="card">
      {cards?.map(card => (
        <PricingCard
          key={card.id}
          title={card.title}
          des={card.description}
          color={card.color}
          price={card.price}
          facilities={[
            `${card.facility1}`,
            `${card.facility2}`,
            `${card.facility3}`,
          ]}
        />
      ))}
    </MainWrapper>
  )
}

const MainWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 100px;
  @media (max-width: 768px) {
    display: grid;
    margin-top: 100px;
    padding: 100px 10px;
    gap: 50px;
  }
`
export default PriceSection

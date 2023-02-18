import React, { useState } from "react"
import styled from "styled-components"
import Loading from "../../../components/Loading/Loading"
import PricingCard from "../components/pricingCard"

const PriceSection = ({ cards }) => {
  const [loader, setLoader] = useState(false)
  if (loader) {
    return <Loading />
  }
  return (
    <MainWrapper id="card">
      {cards?.map(card => (
        <PricingCard
          key={card.id}
          id={card.id}
          slug={card.slug}
          title={card.title}
          des={card.description}
          color={card.color}
          price={card.price}
          facilities={[
            `${card.facility1}`,
            `${card.facility2}`,
            `${card.facility3}`,
          ]}
          setLoader={setLoader}
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

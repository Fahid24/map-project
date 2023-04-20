import React from "react"
import styled from "styled-components"
import GalleryCard from "../components/GalleryCard"

const Gallery = ({ galleries, title, des }) => {
  console.log(galleries)
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{des}</Description>
      <CardsWrapper>
        {galleries?.map(gallery => (
          <GalleryCard
            key={gallery?.id}
            id={gallery?.id}
            title={gallery?.title}
            images={gallery?.images.galleryImages}
          />
        ))}
      </CardsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 100px 0 0 0;
  display: grid;
  justify-items: center;
`
const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`
const Description = styled.div`
  margin-top: 35px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  max-width: 740px;
`
const CardsWrapper = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;
  gap: 60px;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    gap: 20px;
  }
`
export default Gallery

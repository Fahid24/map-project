import React from "react"
import styled from "styled-components"
import GalleryCard from "../components/GalleryCard"

const Gallery = () => {
  return (
    <Wrapper>
      <Title>Gallery</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        hendrerit elit quis metus fermentum vehicula. Ut malesuada suscipit elit
        quis interdum.
      </Description>
      <CardsWrapper>
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
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
`
export default Gallery

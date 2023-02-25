import { Link } from "gatsby"
import React from "react"
import { useInView } from "react-intersection-observer"
import styled, { css, keyframes } from "styled-components"

const BecomeMember = ({ title, image }) => {
  const { ref, inView } = useInView()

  return (
    <Wrapper ref={ref}>
      <TextWrapper inView={inView}>
        <h1>{title}</h1>
        <Button to="/members">
          <button className="">Become a member</button>
        </Button>
      </TextWrapper>
      <Image inView={inView} src={image} alt="" />
    </Wrapper>
  )
}

const textAnimation = keyframes`
0%{ transform: scale(0.8);
  filter: blur(20px);
   transform: translateX(-2000px)


}

100%{ transform: scale(1);
  filter: blur(0px);
  transform: translateX(0)


}`
const imageAnimation = keyframes`
0%{ transform: scale(0.8);
  filter: blur(20px);
   transform: translateX(2000px)


}

100%{ transform: scale(1);
  filter: blur(0px);
  transform: translateX(0)


}`

const Wrapper = styled.section`
  overflow: hidden;
  margin: 0 100px;
  margin-bottom: 100px;
  background: #ed8f1d;
  padding: 20px 20px 20px 50px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 70px 20px;
    margin: 0 0;
    border-radius: 0px;
  }
`
const TextWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  animation: ${({ inView }) =>
    inView
      ? css`
          ${textAnimation} 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards
        `
      : "none"};
  h1 {
    max-width: 600px;
    font-weight: 700;
    font-size: 45px;
    line-height: 72px;
    text-transform: capitalize;

    color: #ffffff;
  }

  @media (max-width: 768px) {
    gap: 40px;

    h1 {
      font-weight: 600;
      font-size: 32px;
      line-height: 140%;
      text-align: center;
    }
    button {
      justify-self: center;
      padding: 5px 20px;
      font-size: 28px;
    }
  }
`

const Button = styled(Link)`
  font-weight: 500;
  justify-self: start;
  font-size: 33px;
  padding: 13px 70px;
  border-radius: 40px;
  text-transform: capitalize;
  background: white;
  color: #ed8f1d;
  transition: 0.1s;
  &:focus {
    outline: 2px solid white;
    border: 3px solid #ed8f1d;
  }
  @media (max-width: 768px) {
    justify-self: center;
    padding: 5px 20px;
    font-size: 28px;
  }
`

const Image = styled.img`
  border-radius: 20px;
  width: 521px;
  height: 300px;
  animation: ${({ inView }) =>
    inView
      ? css`
          ${imageAnimation} 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards
        `
      : "none"};
  @media (max-width: 768px) {
    width: 350px;
    height: 200px;
  }
`

export default BecomeMember

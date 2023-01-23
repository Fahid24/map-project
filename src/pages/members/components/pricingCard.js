import React from "react"
import styled from "styled-components"
import { BsCheckCircleFill } from "react-icons/bs"
import { loadStripe } from "@stripe/stripe-js"
import { toast, ToastContainer } from "react-toastify"
// import StripeCheckout from "react-stripe-checkout"

const PricingCard = ({ title, des, price, facilities, color }) => {
  const amount = price?.slice(1, 3)
  // console.log(amount)
  const product = {
    name: `Marathi Association Perth: ${title}`,
    price: amount,
    productOwner: "Marathi Association Perth",
    description: des,
    quantity: 1,
  }
  const handlePurchase = async () => {
    const stripe = await loadStripe(
      "pk_test_51Lcq7BLXHvCk9rLhXdU4ykecPymSFIEEVVgxLRJGZxQppaX7PGGsqnNUFzb3fKGJFPgusEnB0nLXuOA9UpjygXrZ00zoGfcUHe"
    )
    const body = { product }
    const headers = {
      "Content-Type": "application/json",
    }

    const response = await fetch(
      "https://map-backend-mauve.vercel.app/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    )

    const session = await response.json()

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    })
    if (result) {
    }
    if (!result.error) {
      toast.success("successfully paid")
    }
  }

  return (
    <MainWrapper color={color}>
      <div
        className={`pb-[19px] border-dashed border-b-2 ${
          color ? "white" : "border-[#ed8f1d]"
        }`}
      >
        <Wrapper1 color={color}>
          <h2>{title}</h2>
          <p>{des}</p>
          <h1>{price}</h1>
        </Wrapper1>
      </div>
      <Wrapper2>
        <ul>
          {facilities?.map((facility, index) => (
            <li key={index}>
              <Icon color={color} size={25} />

              <span>{facility}</span>
            </li>
          ))}
        </ul>
        {/* <StripeCheckout
          amount={amount}
          image="https://i.ibb.co/ysGmkZj/map-logo-removebg-preview-1.png"
          token={handlePurchase}
          stripeKey={
            "pk_test_51Lcq7BLXHvCk9rLhXdU4ykecPymSFIEEVVgxLRJGZxQppaX7PGGsqnNUFzb3fKGJFPgusEnB0nLXuOA9UpjygXrZ00zoGfcUHe"
          }
        > */}
        <Button className="" onClick={handlePurchase} color={color}>
          become a member
        </Button>
        {/* </StripeCheckout> */}
      </Wrapper2>
      <ToastContainer />
    </MainWrapper>
  )
}
const MainWrapper = styled.div`
  ${({ color }) => color && "background:#ED8F1D;;"}
  ${({ color }) => color && "color:white;"}
  ${({ color }) => color && "transform: scale(1.06);"}

  border: 1px solid #ed8f1d;
  display: grid;
  gap: 19px;
  border-radius: 10px;
  transition: 0.5s;
  @media (max-width: 768px) {
    transform: scale(1);
  }

  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
`
const Icon = styled(BsCheckCircleFill)`
  color: ${({ color }) => !color && "#ed8f1d"};
`

const Wrapper1 = styled.div`
  display: grid;
  gap: 15px;
  padding: 50px 50px 0 50px;

  /* border-bottom: 1px dashed white; */
  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    /* identical to box height */

    text-transform: lowercase;
  }

  h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    /* identical to box height */

    text-transform: capitalize;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-transform: capitalize;
  }
  @media (max-width: 768px) {
    padding: 30px 30px 0 30px;
  }
`

const Wrapper2 = styled.div`
  padding: 0 50px 50px 50px;

  ul {
    display: grid;
    gap: 15px;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      span {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        /* identical to box height */

        text-transform: capitalize;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0 30px 30px 30px;
  }
`

const Button = styled.button`
  margin-top: 30px;
  background-color: ${({ color }) => (color ? "white" : "#ED8F1D")};

  color: ${({ color }) => (color ? "#ED8F1D" : "white")};
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  text-transform: capitalize;
  padding: 10px 50px;
  border: 1px solid #ed8f1d;
  border-radius: 10px;
  &:hover {
  }
  &:focus {
    outline: 2px solid ${({ color }) => (color ? "white" : "#ED8F1D")};
    border: 3px solid ${({ color }) => (color ? "#ED8F1D" : "white")};
  }
`

export default PricingCard

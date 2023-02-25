import { Link } from "gatsby"
import React from "react"
import { MdArrowBackIosNew } from "react-icons/md"
import styled from "styled-components"
import Layout from "../components/layout"

const DynamicPageTemplate = ({ pageContext }) => {
  // pageContext contains the data for the dynamic page
  const { title, subTitle, date, des } = pageContext

  return (
    <Layout>
      <MainWrapper>
        <h4>
          <Link style={{ display: "flex", alignItems: "center" }} to="/updates">
            <MdArrowBackIosNew />
            All {title}
          </Link>
        </h4>
        <h1>{subTitle}</h1>
        <span>{date?.slice(0, 10)}</span>
        <p>{des}</p>
      </MainWrapper>
    </Layout>
  )
}

const MainWrapper = styled.div`
  margin-top: 90px;
  padding: 100px;
  h4 {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }
  h1 {
    margin-top: 50px;
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    text-transform: capitalize;
  }
  span {
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */

    text-transform: capitalize;

    color: #ed8f1d;
  }
  p {
    margin-top: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
  @media (max-width: 768px) {
    padding: 20px;
    h4 {
      font-size: 18px;
    }
    h1 {
      font-weight: 600;
      font-size: 26px;
      line-height: 1.5;
    }
  }
`
export default DynamicPageTemplate

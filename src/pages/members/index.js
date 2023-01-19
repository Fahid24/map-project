import { graphql } from "gatsby"
import React from "react"
import Banner from "../../components/banner"
import Layout from "../../components/layout"
import PriceSection from "./sections/PriceSection"
import QuestionsSection from "./sections/QuestionsSection"

const index = ({ data }) => {
  const memberData = data?.allContentfulMemberPage.edges[0].node
  const banner = memberData.banner.url
  const title = memberData.title
  const des = memberData.description
  const cards = memberData.pricingCards
  const text = memberData.memberCtaText
  return (
    <Layout>
      <Banner title={title} des={des} background={banner} />
      <PriceSection cards={cards} />
      <QuestionsSection text={text} />
    </Layout>
  )
}

export default index

export const query = graphql`
  query AboutQuery {
    allContentfulMemberPage {
      edges {
        node {
          title
          description
          banner {
            url
          }
          pricingCards {
            title
            childrenContentfulPricingCardDescriptionTextNode {
              description
            }
            id
            facility1
            facility2
            facility3
            color
            price
          }
          memberCtaText
        }
      }
    }
  }
`

import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import BecomeMember from "../home/sections/BecomeMember "
import UpdatesSection from "./sections/UpdatesSection"

const index = ({ data }) => {
  const updateData = data?.allContentfulUpdatesPage.edges[0].node
  const title = updateData.pageTitle
  const des = updateData.pageDescription.pageDescription
  const updates = updateData.updates
  const ctaTitle = data.contentfulCta.title
  const ctaImage = data.contentfulCta.image.url
  console.log(updateData)
  return (
    <Layout>
      <UpdatesSection title={title} des={des} updates={updates} />
      <BecomeMember title={ctaTitle} image={ctaImage} />
    </Layout>
  )
}

export default index

export const query = graphql`
  query UpdatesQuery {
    allContentfulUpdatesPage {
      edges {
        node {
          pageTitle
          pageDescription {
            pageDescription
          }
          updates {
            id
            date
            title
            updateImage {
              url
            }
          }
        }
      }
    }
    contentfulCta {
      title
      image {
        url
      }
    }
  }
`

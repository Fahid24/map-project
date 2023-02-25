import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import Loading from "../../components/Loading/Loading"
import Seo from "../../components/seo"
import BecomeMember from "../home/sections/BecomeMember "
import UpdatesSection from "./sections/UpdatesSection"

const index = ({ data }) => {
  const updateData = data?.allContentfulUpdatesPage.edges[0].node
  const title = updateData.pageTitle
  const des = updateData.pageDescription.pageDescription
  const updates = updateData.updates
  const ctaTitle = data.contentfulCta.title
  const ctaImage = data.contentfulCta.image.url

  if (!updateData || updateData.length === 0) {
    return <Loading />
  }

  return (
    <Layout>
      <UpdatesSection
        title={title}
        des={des}
        updates={updates.slice().reverse()}
      />
      <BecomeMember title={ctaTitle} image={ctaImage} />
    </Layout>
  )
}

export default index
export const Head = () => <Seo title="Updates" />

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

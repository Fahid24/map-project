import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PersonalForm from "./components/PersonalForm"

const ContactIndex = ({ data }) => {
  const contactData = data?.allContentfulContactUsPage.edges[0].node

  return (
    <Layout>
      <PersonalForm contactData={contactData} />
    </Layout>
  )
}

export default ContactIndex
export const Head = () => <Seo title="Contact Us" />

export const query = graphql`
  query ContactQuery {
    allContentfulContactUsPage {
      edges {
        node {
          email
          phone
          description {
            description
          }
          title
          location
        }
      }
    }
  }
`

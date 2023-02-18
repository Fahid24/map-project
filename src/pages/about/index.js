import { graphql } from "gatsby"
import React from "react"
import Banner from "../../components/banner"
import Layout from "../../components/layout"
import Loading from "../../components/Loading/Loading"
import Seo from "../../components/seo"
import BecomeMember from "../home/sections/BecomeMember "
import AboutCommittee from "./sections/AboutCommittee"
import WhoWESection from "./sections/WhoWESection"

const index = ({ data }) => {
  const aboutData = data?.allContentfulAboutPage.edges[0].node
  console.log(aboutData)
  const ctaTitle = data.contentfulCta.title
  const ctaImage = data.contentfulCta.image.url
  const banner = aboutData.banner.url
  const title = aboutData.pageTitle
  const des =
    aboutData.childContentfulAboutPagePageDescriptionTextNode.pageDescription

  const whoTitle = aboutData.whoSectionTitle
  const whoDes = aboutData.whoSectionDescription.whoSectionDescription
  const whoImg1 = aboutData.whoSectionImage1.url
  const whoImg2 = aboutData.whoSectionImage2.url
  const whoImg3 = aboutData.whoSectionImage3.url
  const whoImg4 = aboutData.whoSectionImage4.url
  const committeeTitle =
    data?.allContentfulHomePage.edges[0].node.homeCommitteeTitle
  const committeeDes =
    data?.allContentfulHomePage.edges[0].node.homeCommitteeDes.homeCommitteeDes

  const committeeMembers = aboutData.committeeMembers

  if (!aboutData || aboutData.length === 0) {
    return <Loading />
  }

  return (
    <Layout>
      <Banner background={banner} title={title} des={des} />
      <WhoWESection
        title={whoTitle}
        des={whoDes}
        img1={whoImg1}
        img2={whoImg2}
        img3={whoImg3}
        img4={whoImg4}
      />
      <AboutCommittee
        title={committeeTitle}
        des={committeeDes}
        members={committeeMembers}
      />
      <BecomeMember title={ctaTitle} image={ctaImage} />
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />
export const query = graphql`
  query AboutQuery {
    allContentfulAboutPage {
      edges {
        node {
          banner {
            url
          }
          pageTitle
          childContentfulAboutPagePageDescriptionTextNode {
            pageDescription
          }
          whoSectionTitle
          whoSectionDescription {
            whoSectionDescription
          }
          whoSectionImage1 {
            url
          }
          whoSectionImage2 {
            url
          }
          whoSectionImage3 {
            url
          }
          whoSectionImage4 {
            url
          }
          committeeMembers {
            id
            name
            position
            committeeImage {
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
    allContentfulHomePage {
      edges {
        node {
          homeCommitteeTitle
          homeCommitteeDes {
            homeCommitteeDes
          }
        }
      }
    }
  }
`
export default index

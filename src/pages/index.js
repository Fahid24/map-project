import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "../components/Slider"
import HomeEvents from "./home/sections/HomeEvents"
import AboutUsHome from "./home/sections/AboutUsHome"
import Committee from "./home/sections/Committe"
import BecomeMember from "./home/sections/BecomeMember "
import { graphql } from "gatsby"
import Loading from "../components/Loading/Loading"
import CheckoutForm from "../components/CheckoutForm "

const IndexPage = ({ data }) => {
  const homeData = data?.allContentfulHomePage.edges[0].node
  const slider = homeData?.sliders
  const eventsTitle = homeData.eventTitle
  const eventsDes = homeData.eventDescription
  const events = homeData.homeEvents
  const aboutTitle = homeData.homeAboutTitle
  const aboutDes = homeData.homeAboutDes.homeAboutDes
  const img1 = homeData.homeAboutBanner1.url
  const img2 = homeData.homeAboutBanner2.url
  const img3 = homeData.homeAboutBanner3.url
  const committeeTitle = homeData.homeCommitteeTitle
  const committee = homeData.homeCommittes
  const committeeDes = homeData.homeCommitteeDes.homeCommitteeDes
  const ctaTitle = data.contentfulCta.title
  const ctaImage = data.contentfulCta.image.url

  if (!homeData || homeData.length === 0) {
    return <Loading />
  }

  return (
    <Layout>
      <Slider slider={slider} />
      <HomeEvents title={eventsTitle} des={eventsDes} events={events} />
      <AboutUsHome
        title={aboutTitle}
        des={aboutDes}
        img1={img1}
        img2={img2}
        img3={img3}
      />
      <Committee
        title={committeeTitle}
        des={committeeDes}
        committees={committee}
      />
      <BecomeMember title={ctaTitle} image={ctaImage} />
    </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
export const query = graphql`
  query SliderQuery {
    allContentfulHomePage {
      edges {
        node {
          sliders {
            id
            sliderImage {
              url
            }
          }
          eventTitle
          eventDescription
          homeEvents {
            id
            title
            eventDescription
            eventDate(locale: "")
            eventImage {
              url
            }
          }
          homeAboutTitle
          homeAboutDes {
            homeAboutDes
          }
          homeAboutBanner1 {
            url
          }
          homeAboutBanner2 {
            url
          }
          homeAboutBanner3 {
            url
          }
          homeCommitteeTitle
          homeCommittes {
            name
            id
            position
            committeeImage {
              url
            }
          }
          homeCommitteeDes {
            homeCommitteeDes
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

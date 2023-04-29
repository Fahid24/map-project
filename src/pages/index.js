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
import Gallery from "./home/sections/gallary"
import Featured from "./home/sections/Featured-section"

const IndexPage = ({ data }) => {
  const homeData = data?.allContentfulHomePage.edges[0].node
  const slider = homeData?.sliders
  const eventsTitle = homeData.eventTitle
  const eventsDes = homeData.eventDescription.eventDescription
  const events = data?.allContentfulEventsPage.edges[0].node.events
    .slice(-3)
    .reverse()

  const aboutTitle = homeData.homeAboutTitle
  const aboutDes = homeData.homeAboutDes.homeAboutDes
  const img1 = homeData.homeAboutBanner1.url
  const img2 = homeData.homeAboutBanner2.url
  const img3 = homeData.homeAboutBanner3.url
  const committeeTitle = homeData.homeCommitteeTitle
  const committee = data?.allContentfulAboutPage.edges[0].node.committeeMembers

  const committeeDes = homeData.homeCommitteeDes.homeCommitteeDes
  const ctaTitle = data.contentfulCta.title
  const ctaImage = data.contentfulCta.image.url

  if (!homeData || homeData.length === 0) {
    return <Loading />
  }

  return (
    // <Layout>
    //   <Slider slider={slider} />
    //   <HomeEvents title={eventsTitle} des={eventsDes} events={events} />
    //   <AboutUsHome
    //     title={aboutTitle}
    //     des={aboutDes}
    //     img1={img1}
    //     img2={img2}
    //     img3={img3}
    //   />
    //   <Gallery
    //     title={homeData?.galleryTitle}
    //     des={homeData?.galleryDescription.galleryDescription}
    //     galleries={homeData?.galleryCards}
    //   />
    //   <Featured
    //     title={homeData?.featuredTitle}
    //     des={homeData?.featuredDescription.featuredDescription}
    //     video={homeData?.featuredVideo}
    //   />
    //   <Committee
    //     title={committeeTitle}
    //     des={committeeDes}
    //     committees={committee.slice(-3).reverse()}
    //   />
    //   <BecomeMember title={ctaTitle} image={ctaImage} />
    // </Layout>
    <>
      <img
        style={{
          // width: "100%"
          margin: "100px auto",
        }}
        src="https://www.vosp.us/wp-content/uploads/Under.jpg"
        alt="website under construction"
      />
    </>
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
  query HomeQuery {
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
          eventDescription {
            eventDescription
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

          galleryTitle
          galleryCards {
            title
            id
            images {
              galleryImages {
                id
                file {
                  url
                }
              }
            }
          }
          featuredTitle
          galleryDescription {
            galleryDescription
          }
          featuredDescription {
            featuredDescription
          }
          featuredVideo
          homeCommitteeTitle

          homeCommitteeDes {
            homeCommitteeDes
          }
        }
      }
    }
    allContentfulEventsPage {
      edges {
        node {
          events {
            id
            title
            eventDate(locale: "")
            eventImage {
              url
            }
            eventDescription {
              eventDescription
            }
          }
        }
      }
    }

    allContentfulAboutPage {
      edges {
        node {
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
  }
`

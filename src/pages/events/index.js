import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import BecomeMember from "../home/sections/BecomeMember "
import EventsSection from "./sections/EventsSection"

const EventsIndex = ({ data }) => {
  const eventData = data.allContentfulEventsPage.edges[0].node
  const title = eventData.pageTitle
  const des = eventData.childContentfulEventsPagePageDesTextNode.pageDes
  const events = eventData.events
  const banner = eventData.banner.url
  const ctaTitle = data.contentfulCta.title
  const ctaImg = data.contentfulCta.image.url
  // console.log(data)
  return (
    <Layout>
      <EventsSection title={title} des={des} banner={banner} events={events} />
      <BecomeMember title={ctaTitle} image={ctaImg} />
    </Layout>
  )
}

export default EventsIndex

export const query = graphql`
  query EventsQuery {
    allContentfulEventsPage {
      edges {
        node {
          childContentfulEventsPagePageDesTextNode {
            pageDes
          }
          banner {
            url
          }
          pageTitle
          events {
            id
            title
            eventDate(locale: "")
            eventImage {
              url
            }
            eventDescription
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

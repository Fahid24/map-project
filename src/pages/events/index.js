import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import Loading from "../../components/Loading/Loading"
import Seo from "../../components/seo"
import BecomeMember from "../home/sections/BecomeMember "
import EventsSection from "./sections/EventsSection"

const EventsIndex = ({ data }) => {
  const eventData = data.allContentfulEventsPage.edges[0].node
  const title = eventData.pageTitle
  const des = eventData.childContentfulEventsPagePageDesTextNode.pageDes
  const events = eventData.events.slice().reverse()
  const banner = eventData.banner.url
  const ctaTitle = data.contentfulCta.title
  const ctaImg = data.contentfulCta.image.url
  // console.log(data)
  if (!eventData || eventData.length === 0) {
    return <Loading />
  }
  return (
    <Layout>
      <EventsSection title={title} des={des} banner={banner} events={events} />
      <BecomeMember title={ctaTitle} image={ctaImg} />
    </Layout>
  )
}

export default EventsIndex
export const Head = () => <Seo title="Upcoming Events" />

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
            eventDescription {
              eventDescription
            }
            createdAt
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

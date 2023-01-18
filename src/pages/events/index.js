import React from "react"
import Layout from "../../components/layout"
import BecomeMember from "../home/sections/BecomeMember "
import EventsSection from "./sections/EventsSection"

const EventsIndex = () => {
  return (
    <Layout>
      <EventsSection />
      <BecomeMember />
    </Layout>
  )
}

export default EventsIndex

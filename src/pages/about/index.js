import React from "react"
import Layout from "../../components/layout"
import BecomeMember from "../home/sections/BecomeMember "
import AboutCommittee from "./sections/AboutCommittee"
import AboutHero from "./sections/aboutHero"
import WhoWESection from "./sections/WhoWESection"

const index = () => {
  return (
    <Layout>
      <AboutHero />
      <WhoWESection />
      <AboutCommittee />
      <BecomeMember />
    </Layout>
  )
}

export default index

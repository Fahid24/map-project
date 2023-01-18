import React from "react"
import Layout from "../../components/layout"
import BecomeMember from "../home/sections/BecomeMember "
import UpdatesSection from "./sections/UpdatesSection"

const index = () => {
  return (
    <Layout>
      <UpdatesSection />
      <BecomeMember />
    </Layout>
  )
}

export default index

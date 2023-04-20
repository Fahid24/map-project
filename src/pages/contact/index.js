import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PersonalForm from "./components/PersonalForm"

const ContactIndex = () => {
  return (
    <Layout>
      <PersonalForm />
    </Layout>
  )
}

export default ContactIndex
export const Head = () => <Seo title="Contact Us" />

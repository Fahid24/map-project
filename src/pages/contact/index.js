import React from "react"
import Layout from "../../components/layout"
import PersonalForm from "./components/PersonalForm"

const ContactIndex = () => {
  return (
    <Layout>
      <h1 className="text-center text-[22px] font-bold lg:text-5xl text-white py-10 bg-[#ed8f1d] mt-20 lg:font-bold">
        MEMBERSHIP APPLICATION FORM
      </h1>
      <PersonalForm />
    </Layout>
  )
}

export default ContactIndex

import React from "react"
import Banner from "../../components/banner"
import Layout from "../../components/layout"
import background from "../../images/img_lights.jpg"
import PriceSection from "./sections/PriceSection"
import QuestionsSection from "./sections/QuestionsSection"

const index = () => {
  return (
    <Layout>
      <Banner
        title={"Become a Member"}
        des={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit elit quis metus fermentum vehicula. Ut malesuada suscipit elit quis interdum."
        }
        background={background}
      />
      <PriceSection />
      <QuestionsSection />
    </Layout>
  )
}

export default index

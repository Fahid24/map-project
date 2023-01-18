import * as React from "react"
// import { Link } from "gatsby"
import img1 from "../images/Sankrant-2023-1-min.png"
import img2 from "../images/WhatsApp-Image-2023-01-06-at-2.45.32-PM.jpeg"
import img3 from "../images/new-non-eb-membership.png"
import img4 from "../images/MUKTI-2.png"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "../components/Slider"
import HomeEvents from "./home/sections/HomeEvents"
import AboutUsHome from "./home/sections/AboutUsHome"
import Committee from "./home/sections/Committe"
import BecomeMember from "./home/sections/BecomeMember "

const IndexPage = () => (
  <Layout>
    <Slider />
    <HomeEvents />
    <AboutUsHome />
    <Committee />
    <BecomeMember />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

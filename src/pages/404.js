import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1 className="text-5xl font-bold mt-52 text-center">404: Not Found</h1>
    <p className="text-2xl text-center font-semibold mb-52">
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

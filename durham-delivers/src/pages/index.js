import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Warning from "../components/warning"
import HowTo from "../components/how"
import Locations from "../components/locations"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Warning />
    <HowTo />
    <Locations />
  </Layout>
)

export default IndexPage

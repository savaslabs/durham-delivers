import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Warning from "../components/warning"
import HowTo from "../components/how"
import Locations from "../components/locations"
import Restaurants from "../components/restaurants"
import Accordion from "../components/accordion"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Warning />
    <HowTo />
    <Locations />
    <Restaurants />
    <Accordion />
  </Layout>
)

export default IndexPage

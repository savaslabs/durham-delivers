import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Warning from "../components/warning"
import HowTo from "../components/how"
import Locations from "../components/locations"
import Restaurants from "../components/restaurants"
import Accordion from "../components/accordion"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
      <SEO title="Home" />
      <Hero />
      <Warning />
      <HowTo />
      <Locations />
      <Restaurants />
      <Accordion />
      <Footer />
  </Layout>
)

export default IndexPage

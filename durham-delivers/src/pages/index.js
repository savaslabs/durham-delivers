import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Warning from "../components/warning"
import HowTo from "../components/how"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Warning />
    <HowTo />
  </Layout>
)

export default IndexPage

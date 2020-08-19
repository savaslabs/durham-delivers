import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{
      height: `100vh`
    }}>
      <div style={{
        margin: `0 auto`,
        textAlign: `center`,
        color: `black`,
        height: `calc(100% - 137px)`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`
      }}>
        <h1 style={{
          color: `black`,
          marginBottom: `30px`,
        }}>NOT FOUND</h1>
        <p class="basic-text">This page doesn't exist! <a href="/" class="basic-link">Return home</a></p>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default NotFoundPage

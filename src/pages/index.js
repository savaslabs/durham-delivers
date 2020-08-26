import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Warning from "../components/warning"
import HowTo from "../components/how"
import Locations from "../components/locations"
import Restaurants from "../components/restaurants"
import Accordion from "../components/accordion"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
const [posts, setPosts] = useState([])
useEffect(() => {
setPosts(data.allGoogleSheetEventsRow.nodes)
}, [])
return (
  <Layout>
  {posts.map(post => (
      <div
      >
      <h2>{post.name}</h2>
      <p>{post.day}</p>
      <p>{post.month}</p>
      <p>{post.date}</p>
      <p>{post.time}</p>
      <p>{post.restaurants}</p>
      </div>
      ))}
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
}
export default IndexPage
export const query = graphql`
{
allGoogleSheetEventsRow {
nodes {
name
day
month
date
time
orderbefore
location
restaurants
specialinstructions
}
}
}
`

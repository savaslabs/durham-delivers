import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Warning from "../components/warning"
import HowTo from "../components/how"
import Locations from "../components/locations"
import Restaurants from "../components/restaurants"
import Calendar from '../components/calendar'
import Footer from "../components/footer"
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const IndexPage = ({ data }) => {
const [posts, setPosts] = useState([])
  useEffect(() => {
    setPosts(data.allGoogleSheetEventsRow.nodes)
  }, [])
  return (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Warning />
        <HowTo />
        <Locations />
        <Restaurants />
          <div id="calendar">
            <Accordion className="accordion" allowZeroExpanded preExpanded={['a']}>
              <AccordionItem uuid="a">
                <AccordionItemHeading
                  data-sal="slide-up"
                  data-sal-easing="ease"
                >
                  <AccordionItemButton style={{
                    borderBottom: `2px solid #828282`,
                    cursor: `pointer`
                  }}>
                    <div className="accordion__header">
                      August
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                  <AccordionItemPanel className="accordion__panel">
                  <div className="accordion__item-container">
                  {posts.map(post => (
                    <div
                    >
                      <div className="accordion__date">
                        {post.date} <span style={{margin: `0 15px`}}>|</span> {post.time}
                        <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NnZiYmJiNWNvdmE4ZjRxbm1pcGRocXFjMm8gY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com" target="_blank" rel="noreferrer" className="calendar__btn" style={{
                          marginLeft: `20px`
                        }}>
                          <Calendar />
                        </a>
                      </div>
                      <div className="accordion__order-time">
                        {post.orderbefore}
                      </div>
                      <div className="accordion__dropoff">
                        {post.specialinstructions}
                      </div>
                      <h3>
                      {post.name}
                      </h3>
                      <div className="accordion__address">
                        {post.address}
                      </div>
                        <ul>
                          <li>
                            <a href="https://www.zwelis.com/" target="_blank" rel="noreferrer" className="accordion__link">
                              {post.restaurant1}
                            </a>
                          </li>
                        </ul>
                      </div>
                      ))}
                    </div>
                  </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
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
      date
      time
      orderbefore
      address
      specialinstructions
      restaurant1
    }
  }
}
`

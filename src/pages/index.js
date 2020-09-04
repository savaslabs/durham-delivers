import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Warning from "../components/warning";
import HowTo from "../components/how";
import Locations from "../components/locations";
import Signup from "../components/signup";
import Restaurants from "../components/restaurants";
import Accordion from "../components/accordion";
import Footer from "../components/footer";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Warning />
      <HowTo />
      <Locations />
      <Signup />
      <Restaurants />
      <Accordion />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query Events {
    allAirtable(filter: { table: { eq: "Events" } }) {
      edges {
        node {
          data {
            location_ref {
              data {
                location_name
                location_address
                location_image
              }
            }
            start
            end
            event_note
            calendar_link
            restaurants {
              data {
                restaurant
                url
              }
            }
          }
        }
      }
    }
  }
`;

import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
// import Warning from '../components/warning';
import HowTo from '../components/how';
import Locations from '../components/locations';
import Signup from '../components/signup';
import Restaurants from '../components/restaurants';
import Accordions from '../components/accordions';
import Footer from '../components/footer';
import SEO from '../components/seo';
import Hero from '../components/hero';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <HowTo />
      <Locations />
      <Signup />
      <Restaurants />
      <Accordions data={data.allAirtable.edges} />
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
          id
          data {
            location_ref {
              data {
                location_name
                location_address
              }
            }
            start
            end
            order_by
            instructions
            calendar_link
            restaurants {
              data {
                restaurant
                order_url
              }
            }
          }
        }
      }
    }
  }
`;

import React from "react";
import { StaticQuery, graphql } from "gatsby";

import DurhamImg from "../images/durham-img.jpg";
import { useTileNumber } from "../hooks/useTileNumber";

const Restaurants = ({ data }) => {
  const maxTiles = useTileNumber();

  const restaurants = data.allAirtable.edges;
  // Alphebetize by name
  restaurants.sort((a, b) =>
    a.node.data.restaurant.localeCompare(b.node.data.restaurant)
  );
  return (
    <div id="participating-restaurants">
      <div className="order__container">
        <h2 data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease-in">
          Participating Restaurants
        </h2>
        <div className="container">
          {restaurants.length > 0 &&
            restaurants.map((restaurant, index) => {
              const logoUrl = restaurant.node.data.logo.localFiles[0]
                ? restaurant.node.data.logo.localFiles[0].childImageSharp.fluid
                    .src
                : null;
              return index < maxTiles ? (
                <div
                  data-sal="slide-up"
                  data-sal-delay="400"
                  data-sal-easing="ease-in"
                  className="location__item"
                  key={restaurant.node.id}
                >
                  <a
                    href={restaurant.node.data.url}
                    target="_blank"
                    rel="noreferrer"
                    className="restaurant__link"
                  >
                    <div
                      className="restaurant__image"
                      style={{
                        backgroundImage: `url(${logoUrl})`,
                      }}
                    >
                      <div className="restaurant__title">
                        {restaurant.node.data.restaurant}
                      </div>
                    </div>
                  </a>
                </div>
              ) : (
                <div key={restaurant.node.id}></div>
              );
            })}
        </div>
      </div>
      <div
        className="cover__image"
        style={{
          backgroundImage: `url(${DurhamImg})`,
        }}
      ></div>
    </div>
  );
};

export default function RestaurantQuery(props) {
  return (
    <StaticQuery
      query={graphql`
        query Restaurants {
          allAirtable(filter: { table: { eq: "Restaurants" } }) {
            edges {
              node {
                id
                data {
                  restaurant
                  logo {
                    localFiles {
                      childImageSharp {
                        fluid(maxWidth: 256) {
                          ...GatsbyImageSharpFluid_tracedSVG
                        }
                      }
                    }
                  }
                  url
                }
              }
            }
          }
        }
      `}
      render={(data) => <Restaurants data={data} {...props} />}
    />
  );
}

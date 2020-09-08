import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Background from "../images/utensil-bkgr.png";
import { useTileNumber } from "../hooks/useWindowSize";

const Locations = ({ data }) => {
  const maxTiles = useTileNumber();

  const locations = data.allAirtable.edges;
  // Alphebetize by name
  locations.sort((a, b) =>
    a.node.data.location_name.localeCompare(b.node.data.location_name)
  );
  return (
    <div
      className="locations__wrapper"
      id="local-pick-up"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundColor: `#D9F0EC`,
        backgroundRepeat: `repeat`,
      }}
    >
      <div
        style={{
          padding: `0 30px`,
          maxWidth: `1080px`,
          margin: `0 auto`,
        }}
      >
        <h2 data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-in">
          Delivery Locations
        </h2>
        <div className="container">
          {locations.length > 0 &&
            locations.map((location, index) => {
              const imageUrl = location.node.data.location_image.localFiles
                ? location.node.data.location_image.localFiles[0]
                    .childImageSharp.fluid.src
                : null;
              return index < maxTiles ? (
                <div
                  data-sal="slide-up"
                  data-sal-delay="400"
                  data-sal-easing="ease-in"
                  className="location__item"
                  key={location.node.id}
                >
                  <div
                    className="location__image"
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                    }}
                  ></div>
                  <div className="location__info">
                    <p className="park__title">
                      {location.node.data.location_name}
                    </p>
                    <p
                      style={{
                        fontFamily: `'Heebo', 'Helvetica', sans-serif`,
                        fontSize: `18px`,
                      }}
                    >
                      {location.node.data.location_address}
                    </p>
                  </div>
                </div>
              ) : (
                <div key={location.node.id}> </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default function LocationQuery(props) {
  return (
    <StaticQuery
      query={graphql`
        query Locations {
          allAirtable(filter: { table: { eq: "Locations" } }) {
            edges {
              node {
                id
                data {
                  location_name
                  location_address
                  location_image {
                    localFiles {
                      childImageSharp {
                        fluid(maxWidth: 256) {
                          ...GatsbyImageSharpFluid_tracedSVG
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => <Locations data={data} {...props} />}
    />
  );
}

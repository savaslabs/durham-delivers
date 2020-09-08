import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";

import Background from "../images/utensil-bkgr.png";
import { useWindowSize } from "../util/useWindowSize";
import { getTileNumber } from "../util/getTileNumber";
import Button from "./button";

const Locations = ({ data }) => {
  const width = useWindowSize().width;
  const [minTiles, setMinTiles] = useState();
  const [text, setText] = useState("Show More");

  let locations = data.allAirtable.edges;

  useEffect(() => {
    const initialTiles = getTileNumber(width);
    if (typeof initialTiles === "number") {
      setMinTiles(initialTiles);
    }
  }, [width]);

  // Manage "Show More" state
  const handleClick = () => {
    if (text === "Show More") {
      setText("Show Less");
    } else {
      setText("Show More");
    }
  };

  // Alphebetize by name
  locations.sort((a, b) =>
    a.node.data.location_name.localeCompare(b.node.data.location_name)
  );

  // Shorten locations array if only rendering locations.
  const locationsToRender =
    text === "Show More" ? locations.slice(0, minTiles) : locations;

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
          {locationsToRender.length > 0 &&
            locationsToRender.map((location) => {
              const imageUrl = location.node.data.location_image.localFiles
                ? location.node.data.location_image.localFiles[0]
                    .childImageSharp.fluid.src
                : null;
              return (
                <div
                  data-sal={text === "Show More" ? "slide-up" : undefined}
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
              );
            })}
        </div>
        {locations.length > minTiles && (
          <Button
            className={"button showmore__white"}
            text={text}
            handleClick={handleClick}
            ariaExpanded={text === "Show Less"}
          />
        )}
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

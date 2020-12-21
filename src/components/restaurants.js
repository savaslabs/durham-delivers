import React, { useState, useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import DurhamImg from '../images/durham-img.jpg'
import { useWindowSize } from '../util/useWindowSize'
import { getTileNumber, getSalDelay } from '../util/functions'
import ShowMore from './showMore'

const Restaurants = ({ data }) => {
  const width = useWindowSize().width
  const [minTiles, setMinTiles] = useState()
  const [screen, setScreen] = useState()
  const [text, setText] = useState('Show More')

  useEffect(() => {
    const [initialTiles, screenSize] = getTileNumber(width)
    if (typeof initialTiles === 'number') {
      setMinTiles(initialTiles)
      setScreen(screenSize)
    }
  }, [width])

  // Manage "Show More" state
  const handleClick = () => {
    if (text === 'Show More') {
      setText('Show Less')
    } else {
      setText('Show More')
    }
  }

  const restaurants = data.allAirtable.edges
  // Alphebetize by name
  restaurants.sort((a, b) =>
    a.node.data.restaurant.localeCompare(b.node.data.restaurant)
  )

  // Shorten locations array if only rendering locations.
  const restaurantsToRender =
    text === 'Show More' ? restaurants.slice(0, minTiles) : restaurants

  return (
    <div id='participating-restaurants'>
      <div className='order__container'>
        <h2 data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease-in'>
          Restaurants
        </h2>
        <div className='container'>
          {restaurantsToRender.length > 0 &&
            restaurantsToRender.map((restaurant, index) => {
              const logoUrl =
                restaurant.node.data.logo.localFiles[0] &&
                restaurant.node.data.logo.localFiles[0].childImageSharp
                  ? restaurant.node.data.logo.localFiles[0].childImageSharp
                      .fluid.src
                  : null
              return (
                <div
                  data-sal={text === 'Show More' ? 'slide-up' : undefined}
                  data-sal-delay={getSalDelay(index, screen)}
                  data-sal-easing='ease-in'
                  className='location__item'
                  key={restaurant.node.id}
                >
                  <a
                    href={restaurant.node.data.url}
                    target='_blank'
                    rel='noreferrer'
                    className='restaurant__link'
                  >
                    <div
                      className='restaurant__image'
                      style={{
                        backgroundImage: `url(${logoUrl})`,
                      }}
                    >
                      <div className='restaurant__title'>
                        {restaurant.node.data.restaurant}
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
        </div>
        {restaurants.length > minTiles && (
          <ShowMore
            className='button showmore__green'
            text={text}
            handleClick={handleClick}
            ariaExpanded={text === 'Show Less'}
          />
        )}
      </div>
      <div
        className='cover__image'
        style={{
          backgroundImage: `url(${DurhamImg})`,
        }}
      ></div>
    </div>
  )
}

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
      render={data => <Restaurants data={data} {...props} />}
    />
  )
}

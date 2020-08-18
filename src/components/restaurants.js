import React from "react"
import DurhamImg from "../images/durham-img.jpg"

const Restaurants = () => (
  <div id="participating-restaurants">
    <div className="order__container">
      <h2
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-easing="ease-in"
      >
       Participating Restaurants
      </h2>
      <div>
        <ul style={{
          marginRight: `100px`,
          display: `inline-block`
        }}>
          <li
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in"
          >
            <a href="https://dameschickenwaffles.com/" target="_blank" rel="noreferrer"
            style={{
              fontSize: `21px`,
              lineHeight: `46px`
            }}>
              Dame's Chicken and Waffles
            </a>
          </li>
          <li
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in"
          >
          <a href="https://www.bullcityburgerandbrewery.com/" target="_blank" rel="noreferrer"
          style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Bull City Burger
            </a>
          </li>
          <li
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in"
          >
          <a href="https://www.pompieripizza.com/" target="_blank" rel="noreferrer"
          style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Pompieri Pizza
            </a>
          </li>
          <li
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in"
          >
          <a href="https://www.zwelis.com/" target="_blank" rel="noreferrer"
          style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Zweli’s Kitchen
            </a>
          </li>
        </ul>
        <ul style={{
          marginRight: `100px`,
          display: `inline-block`
        }}>
        <li
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="ease-in"
        >
        <a href="https://bluecorncafedurham.com/" target="_blank" rel="noreferrer" style={{
          fontSize: `21px`,
          lineHeight: `46px`
        }}>
             Blue Corn Café
          </a>
        </li>
          <li
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in"
          >
          <a href="https://www.goorshadurham.com/" target="_blank" rel="noreferrer"
          style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Goorsha
            </a>
          </li>
          <li
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in"
          >
          <a href="https://www.parkerandotis.com/" target="_blank" rel="noreferrer"
          style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Parker & Otis
            </a>
          </li>
          <li
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in"
          >
          <a href="https://copadurham.com/" target="_blank" rel="noreferrer"
          style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              COPA
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="cover__image"
    style={{
      backgroundImage: `url(${DurhamImg})`
    }}>
    </div>
  </div>
)

export default Restaurants

import React from "react"
import DurhamImg from "../images/durham-img.jpg"

const Restaurants = () => (
  <div>
    <div style={{
      padding: `130px 0`,
      maxWidth: `1080px`,
      margin: `0 auto`
    }}>
      <h2>
       Order Local
      </h2>
      <div>
        <ul style={{
          marginRight: `100px`,
          display: `inline-block`
        }}>
          <li>
            <a href="#" style={{
              fontSize: `21px`,
              lineHeight: `46px`
            }}>
              Parts & Labor
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Saladelia Cafe
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              The Mad Hatter’s Cafe + Bakeshop
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Goorsha Durham
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              COPA
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Zweli’s Kitchen
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Resturant 12
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Parts & Labor
            </a>
          </li>
        </ul>
        <ul style={{
          marginRight: `50px`,
          display: `inline-block`
        }}>
          <li>
            <a href="#" style={{
              fontSize: `21px`,
              lineHeight: `46px`
            }}>
              Blue Corn Cafe
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Toast
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Bull City Burger and Brewery
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Pompieri Pizza
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Bull City Solera and Taproom
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Resturant 14
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Resturant 15
            </a>
          </li>
          <li>
          <a href="#" style={{
            fontSize: `21px`,
            lineHeight: `46px`
          }}>
              Parts & Labor
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div style={{
      backgroundImage: `url(${DurhamImg})`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      height:  `calc(100vh - 75px)`
    }}>
    </div>
  </div>
)

export default Restaurants

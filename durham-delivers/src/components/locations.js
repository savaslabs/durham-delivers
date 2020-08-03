import React from "react"
import Background from "../images/fork-bkgr.jpg"
import Park1 from "../images/park-1.png"

const Locations = () => (
  <div className="locations__wrapper"
    style={{
      backgroundImage: `url(${Background})`,
    }}
  >
    <div
      style={{
        padding: `0 30px`,
        maxWidth: `1080px`,
        margin: `0 auto`,
      }}
    >
      <h2>
        Local Pick Up
      </h2>
      <div
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`
        }}
      >
        <div className="location__item">
          <div className="location__image"
            style={{
              backgroundImage: `url(${Park1})`,
            }}
          >
          </div>
          <div style={{
            padding: `10px 0 10px 8px`
          }}>
            <h4>
              Park One
            </h4>
            <p>
              501 Foster St, Durham, NC 27701
            </p>
          </div>
        </div>
        <div className="location__item">
          <div className="location__image"
            style={{
              backgroundImage: `url(${Park1})`,
            }}
          >
          </div>
          <div style={{
            padding: `10px 0 10px 8px`
          }}>
            <h4>
              Park Two
            </h4>
            <p>
              501 Foster St, Durham, NC 27701
            </p>
          </div>
        </div>
        <div className="location__item">
          <div className="location__image"
            style={{
              backgroundImage: `url(${Park1})`,
            }}
          >
          </div>
          <div style={{
            padding: `10px 0 10px 8px`
          }}>
            <h4>
              Park Three
            </h4>
            <p>
              501 Foster St, Durham, NC 27701
            </p>
          </div>
        </div>
        <div className="location__item">
          <div className="location__image"
            style={{
              backgroundImage: `url(${Park1})`,
            }}
          >
          </div>
          <div style={{
            padding: `10px 0 10px 8px`
          }}>
            <h4>
              Park Four
            </h4>
            <p>
              501 Foster St, Durham, NC 27701
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Locations

import React from "react"
import Background from "../images/utensil-bkgr.png"
import Park1 from "../images/park-1.png"

const Locations = () => (
  <div className="locations__wrapper" id="local-pick-up"
    style={{
      backgroundImage: `url(${Background})`,
      backgroundColor: `#D9F0EC`,
      backgroundSize: `contain`,
      backgroundRepeat: `no-repeat`
    }}
  >
    <div
      style={{
        padding: `0 30px`,
        maxWidth: `1080px`,
        margin: `0 auto`,
      }}
    >
      <h2
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-easing="ease-in"
      >
        Delivery Locations
      </h2>
      <div
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`
        }}
      >
        <div
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          className="location__item"
        >
          <div className="location__image"
            style={{
              backgroundImage: `url(${Park1})`,
            }}
          >
          </div>
          <div style={{
            padding: `10px 0 10px 8px`
          }}>
            <p className="park__title">
              Old Bull
            </p>
            <p style={{
              fontFamily: `'Heebo', 'Helvetica', sans-serif`,
              fontSize: `18px`
            }}>
              300 Blackwell St., Durham, NC 27701
            </p>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-easing="ease-in"
          className="location__item"
        >
          <div className="location__image"
            style={{
              backgroundImage: `url(${Park1})`,
            }}
          >
          </div>
          <div style={{
            padding: `10px 0 10px 8px`
          }}>
            <p className="park__title">
              Park Two
            </p>
            <p style={{
              fontFamily: `'Heebo', 'Helvetica', sans-serif`,
              fontSize: `18px`
            }}>
              501 Foster St, Durham, NC 27701
            </p>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="600"
          data-sal-easing="ease-in"
          className="location__item"
        >
          <div className="location__image"
            style={{
              backgroundImage: `url(${Park1})`,
            }}
          >
          </div>
          <div style={{
            padding: `10px 0 10px 8px`
          }}>
            <p className="park__title">
              Park Three
            </p>
            <p style={{
              fontFamily: `'Heebo', 'Helvetica', sans-serif`,
              fontSize: `18px`
            }}>
              501 Foster St, Durham, NC 27701
            </p>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          className="location__item"
        >
          <div className="location__image"
            style={{
              backgroundImage: `url(${Park1})`,
            }}
          >
          </div>
          <div style={{
            padding: `10px 0 10px 8px`
          }}>
            <p className="park__title">
              Park Four
            </p>
            <p style={{
              fontFamily: `'Heebo', 'Helvetica', sans-serif`,
              fontSize: `18px`
            }}>
              501 Foster St, Durham, NC 27701
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Locations

import React from "react"
import Background from "../images/fork-bkgr.jpg"
import Park1 from "../images/park-1.png"

const Locations = () => (
  <div
    style={{
      backgroundImage: `url(${Background})`,
      padding: `100px 0`
    }}
  >
    <div
      style={{
        padding: `0 20px`,
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
        <div
          style={{
            width: `calc(33% - 20px)`,
            marginBottom: `50px`
          }}
        >
          <div
            style={{
              backgroundImage: `url(${Park1})`,
              width: `342px`,
              height: `342px`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`
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
        <div
          style={{
            width: `calc(33% - 20px)`,
          }}
        >
          <div
            style={{
              backgroundImage: `url(${Park1})`,
              width: `342px`,
              height: `342px`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`
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
        <div
          style={{
            width: `calc(33% - 20px)`,
          }}
        >
          <div
            style={{
              backgroundImage: `url(${Park1})`,
              width: `342px`,
              height: `342px`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`
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
        <div
          style={{
            width: `calc(33% - 20px)`,
          }}
        >
          <div
            style={{
              backgroundImage: `url(${Park1})`,
              width: `342px`,
              height: `342px`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`
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
      </div>
    </div>
  </div>
)

export default Locations

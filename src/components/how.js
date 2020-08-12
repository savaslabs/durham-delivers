import React from "react"

const HowTo = () => (
  <div className="how__container" id="how-it-works">
  <div className="intro">
    <p className="intro__quote">
      "Restaurants are barely surviving. Delivery apps will kill them."<br />
      <a href="#" target="_blank" rel="noreferrer">- Washington Post (May 2020)</a>
    </p>
    <p>
      Durham Delivers was created out of the need to help local restaurants whose dining rooms were shuttered due to COVID-19, get their food to customers. By grouping orders at one location and time, while eliminating hefty service fees levied by popular delivery apps, Durham Delivers provides a financially viable option for independent restaurants, while adding new delivery options for customers.
    </p>
  </div>
    <h2>
      How it Works
    </h2>
    <ol>
      <li>
        Find out where and when your favorite local restaurant delivers to a location near you.<br /> See the <a href="#calendar">calendar below</a>.
      </li>
      <li>
        Place your order with the restaurant. Let them know it’s for a Durham Delivers event.
      </li>
      <li>
        Pick up your food at the designated time and location and enjoy it proudly, knowing you’re safely supporting local, independent restaurants!
      </li>
      <li>
        Wash, rinse, repeat.
      </li>
    </ol>
  </div>
)

export default HowTo

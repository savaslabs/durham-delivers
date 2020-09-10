import React from "react";

const HowTo = () => (
  <div className="how__container" id="how-it-works">
    <div className="intro">
      <p
        className="intro__quote"
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-easing="ease-in"
      >
        "Restaurants are barely surviving. Delivery apps will kill them."
        <br />
        <span>&mdash;</span>{" "}
        <a
          href="https://www.washingtonpost.com/outlook/2020/05/29/delivery-apps-restaurants-coronavirus/"
          target="_blank"
          rel="noreferrer"
        >
          Washington Post (May 2020)
        </a>
      </p>
      <p data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-in">
        Durham Delivers was created out of the need to help local restaurants
        whose dining rooms were shuttered due to COVID-19, get their food to
        customers. By grouping orders at one location and time, while
        eliminating hefty service fees levied by popular delivery apps, Durham
        Delivers provides a financially viable option for independent
        restaurants, while adding new delivery options for customers.
      </p>
    </div>
    <h2 data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-in">
      How it Works
    </h2>
    <ol>
      <li data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-in">
        Find out where and when your favorite local restaurant delivers to a
        location near you.
        <br /> See the <a href="#calendar">calendar below</a>.
      </li>
      <li data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-in">
        Place your order with the restaurant. Take note of any special
        instructions included in the calendar details below before you order.
      </li>
      <li data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-in">
        Pick up your food at the designated time and location and enjoy it
        proudly, knowing you’re safely supporting local, independent
        restaurants!
      </li>
      <li data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-in">
        Wash, rinse, repeat.
      </li>
    </ol>
  </div>
);

export default HowTo;

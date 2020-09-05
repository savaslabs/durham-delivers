import React from "react";
import moment from "moment";
import Calendar from "../components/calendar";

const Event = ({ data }) => {
  const startTime = moment(data.start).format("ddd MMMM Do YYYY, h:mm");
  const endTime = moment(data.end).format("h:mm a");
  const calendarLink = data.calendarLink;
  const name = data.location_ref[0].data.location_name;
  const address = data.location_ref[0].data.location_address;
  const orderBy =
    data.order_by.length > 0
      ? moment(data.order_by).format("ddd MMM Do h:mm a")
      : null;
  const instructions = data.instructions;
  const restaurants = data.restaurants;

  return (
    <>
      <div
        data-sal="slide-up"
        data-sal-easing="ease"
        className="accordion__component"
      >
        <div className="accordion__date">
          {startTime}–{endTime}
          <a
            href={calendarLink}
            target="_blank"
            rel="noreferrer"
            className="calendar__btn"
            style={{
              marginLeft: `20px`,
            }}
          >
            <Calendar />
          </a>
        </div>
        {orderBy && (
          <div className="accordion__order-time">Order by: {orderBy}</div>
        )}
        <div className="accordion__order-time">{instructions}</div>
        <div className="accordion__name">{name}</div>
        <div className="accordion__address">{address}</div>
        {restaurants && (
          <ul>
            {restaurants.map((restaurant) => {
              return (
                <li key={Math.random()}>
                  <a
                    href={restaurant.data.url}
                    target="_blank"
                    rel="noreferrer"
                    className="accordion__link"
                  >
                    {restaurant.data.restaurant}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Event;

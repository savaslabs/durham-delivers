import React from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";

import Calendar from "../components/calendar";

const Event = ({ data }) => {
  const date = moment(data.start).format("ddd MMM Do");
  const startTime = moment(data.start).format("h:mm");
  const endTime = moment(data.end).format("h:mm a");
  const calendarLink = data.calendar_link;
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
          {date} | {startTime}–{endTime}
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
        <ReactMarkdown
          source={instructions}
          className="accordion__order-time"
        />
        <div className="accordion__name">{name}</div>
        <div className="accordion__address">{address}</div>
        {restaurants && (
          <ul>
            {restaurants.map((restaurant) => {
              return (
                <li key={Math.random()}>
                  <a
                    href={restaurant.data.order_url}
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
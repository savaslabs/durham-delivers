import React from "react";
import moment from "moment";
import Calendar from "../components/calendar";

const Event = ({ data }) => {
  const startTime = moment(data.start).format("ddd MMMM Do YYYY, h:mm");
  const endTime = moment(data.end).format("h:mm");
  const calendarLink = data.calendarLink;
  const name = data.location_ref.location_name;
  const address = data.location_ref.location_address;
  const note = data.event_note;
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
        <div className="accordion__order-time">{note}</div>
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

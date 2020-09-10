import React, { useState, useEffect } from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";

import { Calendar } from "../components/calendar";
import { getSalDelay } from "../util/functions";

const Event = ({ data, index }) => {
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
  const [savedEvents, setSavedEvents] = useState({});

  // Store clicked events to users' local storage so we can change
  // the appearance of clicked events.
  const _storeData = (data) => {
    try {
      localStorage.setItem("@store", JSON.stringify(data));
    } catch (error) {
      console.log("Error saving to local storage.");
    }
  };

  const [initialAppLoad, setInitialAppLoad] = useState(true);

  const _retrieveData = () => {
    try {
      const value = localStorage.getItem("@store");
      const saved = JSON.parse(value);

      if (saved !== null) {
        setSavedEvents(saved);
      }
    } catch (error) {
      console.log("No user setting data was retrieved");
    }
    setInitialAppLoad(false);
  };

  useEffect(() => {
    if (initialAppLoad) {
      _retrieveData();
    }
  });

  const handleClick = () => {
    const newSavedEvents = { ...savedEvents, ...{ [calendarLink]: true } };
    setSavedEvents(newSavedEvents);
    _storeData(newSavedEvents);
  };

  return (
    <>
      <div className="accordion__component">
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
            onClick={handleClick}
          >
            <Calendar clicked={savedEvents[calendarLink]} />
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

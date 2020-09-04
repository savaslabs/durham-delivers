import React from "react";
import moment from "moment";
import Accordion from "./accordion";

const Accordions = ({ data }) => {
  let events = data.map((el) => el.node.data);
  // Filter out events that have already passed.
  events.filter((event) => moment(event["start"]).isAfter(Date()));

  // Make the event month easier to query. add 1 because month starts indexing at 0.
  events.forEach((event) => (event.month = moment(event["start"]).month() + 1));

  // Build an array of month indexes to display months in order.
  const buildMonthArray = () => {
    const currentMonth = new Date().getMonth() + 1;
    const initialArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const temp = initialArray.map((month) => month + currentMonth);
    return temp.map((month) => (month > 12 ? month - 12 : month));
  };

  // Group events by month, in order, starting from this month.
  const eventsByMonth = buildMonthArray().map((i) =>
    events.filter((event) => event.month === i)
  );

  return (
    <>
      {eventsByMonth.map((month) => {
        return month.length > 0 ? (
          <Accordion key={month} data={month} />
        ) : (
          <div />
        );
      })}
      <></>
    </>
  );
};

export default Accordions;

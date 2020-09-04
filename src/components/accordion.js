import React from "react";
import moment from "moment";
import Event from "../components/event";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Accordions = ({ data }) => {
  const month = moment(data[0].start).format("MMMM");
  return (
    <div id="calendar">
      <Accordion className="accordion" allowZeroExpanded preExpanded={["a"]}>
        <AccordionItem uuid="a">
          <AccordionItemHeading data-sal="slide-up" data-sal-easing="ease">
            <AccordionItemButton
              style={{
                borderBottom: `2px solid #828282`,
                cursor: `pointer`,
              }}
            >
              <div className="accordion__header">{month}</div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion__panel">
            <div className="accordion__item-container">
              {data.map((event) => {
                return <Event key={event.start} data={event} />;
              })}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordions;

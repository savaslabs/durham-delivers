import React from "react";
import Calendar from "../components/calendar";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Accordions = () => (
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
            <div className="accordion__header">September</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordion__panel">
          <div className="accordion__item-container">
            <div
              data-sal="slide-up"
              data-sal-easing="ease"
              className="accordion__component"
            >
              <div className="accordion__date">
                Wednesday, Sept. 9 <span style={{ margin: `0 15px` }}>|</span>
                12 - 12:30 PM
                <a
                  href="https://calendar.google.com/event?action=TEMPLATE&tmeid=Mjg1bGlpZGRoODQ4ajg4aG5iMTVxNm00ZHYgbWFkZHlAc2F2YXNsYWJzLmNvbQ&tmsrc=maddy%40savaslabs.com"
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
              <div className="accordion__order-time">
                Order by: 10 p.m. on Tuesday, Sept. 8. <br />
                Order for pickup, add Durham Delivers menu option to cart, add
                location/day/time of delivery to Special Instructions.
              </div>
              <div className="accordion__name">American Underground</div>
              <div className="accordion__address">
                Lobby @ 201 West Main St.
              </div>
              <ul>
                <li>
                  <a
                    href="https://direct.chownow.com/order/9303/locations/12670"
                    target="_blank"
                    rel="noreferrer"
                    className="accordion__link"
                  >
                    Maverick's Smokehouse and Taproom
                  </a>
                </li>
              </ul>
            </div>

            <div
              data-sal="slide-up"
              data-sal-easing="ease"
              className="accordion__component"
            >
              <div className="accordion__date">
                Wednesday, Sept. 9 <span style={{ margin: `0 15px` }}>|</span>6
                - 6:30 PM
                <a
                  href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NzZtdTJqdGtsamZtb2lvNG5lb2ttZnM2MWogbWFkZHlAc2F2YXNsYWJzLmNvbQ&tmsrc=maddy%40savaslabs.com"
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
              <div className="accordion__order-time">
                Order by: 10 p.m. on Tuesday, Sept. 8 <br />
                Order online for pickup, schedule for 6 p.m. on 9/9. Include
                “Downing Creek Durham Delivers Order” as special instructions
                when you place your order.
              </div>
              <div className="accordion__name">Downing Creek</div>
              <div className="accordion__address">
                Park @ 6799 Downing Creek Pkwy
              </div>
              <ul>
                <li>
                  <a
                    href="https://bluecorncafedurham.com/blue-corn-cafe-durham-home/pick-up-orders/"
                    target="_blank"
                    rel="noreferrer"
                    className="accordion__link"
                  >
                    Blue Corn Cafe
                  </a>
                </li>
              </ul>
            </div>

            <div
              data-sal="slide-up"
              data-sal-easing="ease"
              className="accordion__component"
            >
              <div className="accordion__date">
                Wednesday, Sept. 9 <span style={{ margin: `0 15px` }}>|</span>6
                - 6:30 PM
                <a
                  href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NzZtdTJqdGtsamZtb2lvNG5lb2ttZnM2MWogbWFkZHlAc2F2YXNsYWJzLmNvbQ&tmsrc=maddy%40savaslabs.com"
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
              <div className="accordion__order-time">
                Order by: 4 p.m. on Wednesday, Sept. 9 <br />
                Instructions: Order online for pickup. In your cart, use coupon
                code DowningCreek. During checkout, schedule your pickup for 6
                p.m. on Sept. 9
              </div>
              <div className="accordion__name">Downing Creek</div>
              <div className="accordion__address">
                Park @ 6799 Downing Creek Pkwy
              </div>
              <ul>
                <li>
                  <a
                    href="https://locopops.square.site/"
                    target="_blank"
                    rel="noreferrer"
                    className="accordion__link"
                  >
                    LocoPops
                  </a>
                </li>
              </ul>
            </div>

            <div
              data-sal="slide-up"
              data-sal-easing="ease"
              className="accordion__component"
            >
              <div className="accordion__date">
                Thursday, Sept. 10 <span style={{ margin: `0 15px` }}>|</span>
                5:30 - 6 PM
                <a
                  href="https://calendar.google.com/event?action=TEMPLATE&tmeid=N292MWJvdWdjNW1hcjlhZ2txbWVkODBva3MgbWFkZHlAc2F2YXNsYWJzLmNvbQ&tmsrc=maddy%40savaslabs.com"
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
              <div className="accordion__order-time">
                Order by 10 p.m. Wednesday, Sept. 9. <br />
                Orders MUST be placed via this custom site:{" "}
                <a
                  href="http://ordering.app/federal"
                  target="_blank"
                  rel="noreferrer"
                  className="accordion__link"
                >
                  ordering.app/federal
                </a>
              </div>
              <div className="accordion__name">Alden Place Apartments</div>
              <div className="accordion__address">
                Picnic Gazebo @ 500 Alexan Dr. Durham, NC 27707
              </div>
              <ul>
                <li>
                  <a
                    href="http://ordering.app/federal"
                    target="_blank"
                    rel="noreferrer"
                    className="accordion__link"
                  >
                    Federal
                  </a>
                </li>
              </ul>
            </div>
            <div
              data-sal="slide-up"
              data-sal-easing="ease"
              className="accordion__component"
            >
              <div className="accordion__date">
                Thursday, Sept. 10 <span style={{ margin: `0 15px` }}>|</span> 6
                - 6:30 PM
                <a
                  href="https://calendar.google.com/event?action=TEMPLATE&tmeid=M2ZrdXA1YjJpanU3cW81dWMzczk3aTFsOHEgbWFkZHlAc2F2YXNsYWJzLmNvbQ&tmsrc=maddy%40savaslabs.com"
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
              <div className="accordion__order-time">
                Order by: 11 a.m. on Thursday, Sept. 10. <br />
                Add “Group Order” item at the bottom of the menu to your cart.
                For Special Instructions include “Durham Delivers Apts @ ATC /
                Sept. 10 / 6 p.m.”
              </div>
              <div className="accordion__name">
                Apartments @ American Tobacco
              </div>
              <div className="accordion__address">
                Lobby @ 300 Blackwell St.
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.toasttab.com/copa-durham/v3"
                    target="_blank"
                    rel="noreferrer"
                    className="accordion__link"
                  >
                    COPA
                  </a>
                </li>
              </ul>
            </div>

            <div
              data-sal="slide-up"
              data-sal-easing="ease"
              className="accordion__component"
            >
              <div className="accordion__date">
                Thursday, Sept. 10 <span style={{ margin: `0 15px` }}>|</span>
                6:30 - 7 PM
                <a
                  href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MzJjZjR0Mzd1a2MxM3NyZjlxY2dlM2xrODEgbWFkZHlAc2F2YXNsYWJzLmNvbQ&tmsrc=maddy%40savaslabs.com"
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
              <div className="accordion__order-time">
                Order by: 10 p.m. on Tuesday, Sept. 8. <br />
                Complete the order form linked below. As a Special Note at the
                bottom of the form, include “Durham Delivers Audubon Park /
                Sept. 10 / 6:30 p.m.”
              </div>
              <div className="accordion__name">Audubon Park</div>
              <div className="accordion__address">
                Audubon Park Pool @ Corner of Solitude Way & Whisperwind Dr.,
                Durham, NC 27713
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.dropbox.com/s/bcy4h25zso0xbg9/20_09_09_ZwelisMenu.pdf?dl=0"
                    target="_blank"
                    rel="noreferrer"
                    className="accordion__link"
                  >
                    Zweli’s Menu
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfraQn5gkV2BFSZixWNEamiBQ1Eq8aOh1qNsjUNhc1CMjAizg/viewform"
                    target="_blank"
                    rel="noreferrer"
                    className="accordion__link"
                  >
                    Zweli’s Order Form
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  </div>
);

export default Accordions;

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
                Fri, Sept 4 <span style={{ margin: `0 15px` }}>|</span> 5:30 -
                6:00 PM
                <a
                  href="https://calendar.google.com/event?action=TEMPLATE&tmeid=M3FhYzUyb21xOXR2cTRrc3MzZzNpbHZqOGUgY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com"
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
                Order by Fri Sept. 4 @ 4 PM. Call in your order between 11:15
                a.m.-4 p.m. on Friday, Sept. 4. Specify that it is for the
                Apartments @ American Tobacco Durham Delivers order. Pick up in
                lobby.
              </div>
              <div className="accordion__name">Old Bull at ATC</div>
              <div className="accordion__address">
                300 Blackwell St., Durham, NC 27701
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.bullcityburgerandbrewery.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="accordion__link"
                  >
                    Bull City Burger & Brewery
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pompieripizza.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="accordion__link"
                  >
                    Pompieri Pizza
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
                Fri, Sept 4 <span style={{ margin: `0 15px` }}>|</span> 5:30 -
                6:00 PM
                <a
                  href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MG05dTh0ZHE1bHZ0djRnNHYydmU3YmlzZW8gY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com"
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
                Order by 10 PM on Thursday, Sept. 3. Order online for pickup,
                schedule for 5:30 PM on 9/4. Include “Solis Brightleaf Durham
                Delivers Order” as special instructions when you place your
                order. Pick up food at lobby.
              </div>
              <div className="accordion__name">Solis Brightleaf Apartments</div>
              <div className="accordion__address">
                1005 W Main St. Durham, NC 27701
              </div>
              <ul>
                <li>
                  <a
                    href="https://bluecorncafedurham.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="accordion__link"
                  >
                    Blue Corn Café
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
                Order by: 10 p.m. on Tuesday, Sept. 8. Order for pickup, add
                Durham Delivers menu option to cart, add location/day/time of
                delivery to Special Instructions. Pick up location: American
                Underground Lobby
              </div>
              <div className="accordion__name">American Underground</div>
              <div className="accordion__address">201 West Main St.</div>
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
                Order by 10 p.m. Wednesday, Sept. 9. Orders MUST be placed via
                the custom site linked below.
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
                Add “Group Order” item at the bottom of the menu to your cart.
                Order by: 11 a.m. on Thursday, Sept. 10. Durham Delivers Apts @
                ATC/Sept. 10/6 p.m.
              </div>
              <div className="accordion__name">
                Apartments @ American Tobacco
              </div>
              <div className="accordion__address">300 Blackwell St.</div>
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
                10 p.m. on Tuesday, Sept. 8. Complete the order form linked
                below. As a Special Note at the bottom of the form, include
                “Durham Delivers Audubon Park/Sept. 10/6:30 p.m.” Pick up at
                Audubon Park Pool.
              </div>
              <div className="accordion__name">Audubon Park</div>
              <div className="accordion__address">
                Corner of Solitude Way & Whisperwind Dr., Durham, NC 27713
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

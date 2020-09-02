import React from 'react'
import Calendar from '../components/calendar'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Accordions = () => (
  <div id="calendar">
  <Accordion className="accordion" allowZeroExpanded preExpanded={['a']}>
    <AccordionItem uuid="a">
      <AccordionItemHeading
        data-sal="slide-up"
        data-sal-easing="ease"
      >
        <AccordionItemButton style={{
          borderBottom: `2px solid #828282`,
          cursor: `pointer`
        }}>
          <div className="accordion__header">
            September
          </div>
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
            Fri, Sept 4 <span style={{margin: `0 15px`}}>|</span> 5:30 - 6:00 PM
            <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=M3FhYzUyb21xOXR2cTRrc3MzZzNpbHZqOGUgY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com" target="_blank" rel="noreferrer" className="calendar__btn" style={{
              marginLeft: `20px`
            }}>
              <Calendar />
            </a>
          </div>
          <div className="accordion__order-time">
            Order by Fri Sept. 4 @ 4 PM. Call in your order between 11:15 a.m.-4 p.m. on Friday, Sept. 4. Specify that it is for the Apartments @ American Tobacco Durham Delivers order. Pick up in lobby.
          </div>
          <div className="accordion__name">
            Old Bull at ATC
          </div>
          <div className="accordion__address">
            300 Blackwell St., Durham, NC 27701
          </div>
            <ul>
              <li>
                <a href="https://www.bullcityburgerandbrewery.com/" target="_blank" rel="noreferrer" className="accordion__link">
                  Bull City Burger & Brewery
                </a>
              </li>
              <li>
                <a href="https://www.pompieripizza.com/" target="_blank" rel="noreferrer" className="accordion__link">
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
              Fri, Sept 4 <span style={{margin: `0 15px`}}>|</span> 5:30 - 6:00 PM
              <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MG05dTh0ZHE1bHZ0djRnNHYydmU3YmlzZW8gY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com" target="_blank" rel="noreferrer" className="calendar__btn" style={{
                marginLeft: `20px`
              }}>
                <Calendar />
              </a>
            </div>
            <div className="accordion__order-time">
            Order by 10 PM on Thursday, Sept. 3. Order online for pickup, schedule for 5:30 PM on 9/4. Include “Solis Brightleaf Durham Delivers Order” as special instructions when you place your order. Pick up food at lobby.
            </div>
            <div className="accordion__name">
              Solis Brightleaf Apartments
            </div>
            <div className="accordion__address">
              1005 W Main StDurham, NC 27701
            </div>
              <ul>
                <li>
                  <a href="https://bluecorncafedurham.com/" target="_blank" rel="noreferrer" className="accordion__link">
                    Blue Corn Café
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </AccordionItemPanel>
    </AccordionItem>
  </Accordion>
  </div>
)

export default Accordions

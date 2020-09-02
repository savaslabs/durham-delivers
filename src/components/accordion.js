import React from 'react';
import Calendar from '../components/calendar';
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
            August
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
            Fri, Aug 21 <span style={{margin: `0 15px`}}>|</span> 5:30 pm
            <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NnZiYmJiNWNvdmE4ZjRxbm1pcGRocXFjMm8gY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com" target="_blank" rel="noreferrer" className="calendar__btn" style={{
              marginLeft: `20px`
            }}>
              <Calendar />
            </a>
          </div>
          <div className="accordion__order-time">
            Order by 11:00 AM
          </div>
          <div className="accordion__dropoff">
            Pick up in the lobby
          </div>
          <h3>
          Liberty Warehouse Apartments
          </h3>
          <div className="accordion__address">
            530 Foster St., Durham, NC 27701
          </div>
            <ul>
              <li>
                <a href="https://www.zwelis.com/" target="_blank" rel="noreferrer" className="accordion__link">
                  Zweli’s
                </a>
              </li>
            </ul>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            className="accordion__component"
          >
          <div className="accordion__date">
            Fri, Aug 21 <span style={{margin: `0 15px`}}>|</span> 5:30 pm
            <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=N2d1YzNxbTU0ZXVvN2dxOTEwbjVuanZiaTAgY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com" target="_blank" rel="noreferrer" className="calendar__btn" style={{
              marginLeft: `20px`
            }}>
              <Calendar />
            </a>
          </div>
          <div className="accordion__order-time">
            Order by 11:00 AM
          </div>
          <div className="accordion__dropoff">
            Pick up in the courtyard
          </div>
          <h3>
          Old Bull at ATC
          </h3>
          <div className="accordion__address">
            300 Blackwell St., Durham, NC 27701
          </div>
            <ul>
              <li>
                <a href="https://bluecorncafedurham.com/" target="_blank" rel="noreferrer" className="accordion__link">
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
            Fri, Aug 21 <span style={{margin: `0 15px`}}>|</span> 5:30pm
            <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MTZ2aGZraXBidHFva3VoY2I0bmIxMjU5NWggY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com" target="_blank" rel="noreferrer" className="calendar__btn" style={{
              marginLeft: `20px`
            }}>
              <Calendar />
            </a>
          </div>
          <div className="accordion__order-time">
            Order by 11:00 AM
          </div>
          <div className="accordion__dropoff">
            Pick up in the lobby
          </div>
          <h3>
          Solis Brightleaf Apartments
          </h3>
          <div className="accordion__address">
            1005 W Main St., Durham, NC 27701
          </div>
            <ul>
              <li>
                <a href="https://copadurham.com/" target="_blank" rel="noreferrer" className="accordion__link">
                  COPA
                </a>
              </li>
            </ul>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            className="accordion__component"
          >
            <div className="accordion__date">
              Fri, Aug 21 <span style={{margin: `0 15px`}}>|</span> 6:00 pm
              <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=M3Q0YnRoampsZnNyMG41NGhubWo3cW9xdmggY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com" target="_blank" rel="noreferrer" className="calendar__btn" style={{
                marginLeft: `20px`
              }}>
                <Calendar />
              </a>
            </div>
            <div className="accordion__order-time">
              Order by 11:00 AM
            </div>
            <h3>
            Audubon Park
            </h3>
            <div className="accordion__address">
              corner of Solitude Way & Whisperwind Dr.,<br /> Durham, NC 27713
            </div>
              <ul>
                <li>
                  <a href="https://dameschickenwaffles.com/" target="_blank" rel="noreferrer" className="accordion__link">
                    Dame’s Chicken and Waffles
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
                Fri, Aug 21 <span style={{margin: `0 15px`}}>|</span> 6:00 pm
                <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MGdzNzFucWxzcGIyZjNrYWpuZWthOGhlbnQgY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com" target="_blank" rel="noreferrer" className="calendar__btn" style={{
                  marginLeft: `20px`
                }}>
                  <Calendar />
                </a>
              </div>
              <div className="accordion__order-time">
                Order by 11:00 AM
              </div>
              <div className="accordion__dropoff">
                pick up on Acadia street by the pavillion parking lot swings
              </div>
              <h3>
              Northgate Park
              </h3>
              <div className="accordion__address">
                300 W Club Boulevard, Durham, NC 27704
              </div>
                <ul>
                  <li>
                    <a href="https://www.bullcityburgerandbrewery.com/" target="_blank" rel="noreferrer" className="accordion__link">
                      Bull City Burger
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
                  data-sal-delay="200"
                  data-sal-easing="ease"
                  className="accordion__component"
                >
                <div className="accordion__date">
                  Sat, Aug 22 <span style={{margin: `0 15px`}}>|</span> 6:00pm
                  <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=N2Ztb3I1cmYxcWtsazBzNjkzNmZhZGhvcmMgY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com" target="_blank" rel="noreferrer" className="calendar__btn" style={{
                    marginLeft: `20px`
                  }}>
                    <Calendar />
                  </a>
                </div>
                <div className="accordion__order-time">
                  Order by 11:00 AM
                </div>
                <div className="accordion__dropoff">
                  TBD
                </div>
                <h3>
                 Avenue Park
                </h3>
                <div className="accordion__address">
                  816 Burch Ave., Durham, NC 27701
                </div>
                  <ul>
                    <li>
                      <a href="https://www.goorshadurham.com/" target="_blank" rel="noreferrer" className="accordion__link">
                        Goorsha
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
                  Sat, Aug 22 <span style={{margin: `0 15px`}}>|</span> TBD
                  <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MTZ2aGZraXBidHFva3VoY2I0bmIxMjU5NWggY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com" target="_blank" rel="noreferrer" className="calendar__btn" style={{
                    marginLeft: `20px`
                  }}>
                    <Calendar />
                  </a>
                </div>
                <div className="accordion__order-time">
                  Order by 11:00 AM
                </div>
                <div className="accordion__dropoff">
                  TBD
                </div>
                <h3>
                Woodcroft
                </h3>
                <div className="accordion__address">
                  TBD
                </div>
                  <ul>
                    <li>
                      <a href="https://www.parkerandotis.com/" target="_blank" rel="noreferrer" className="accordion__link">
                        Parker & Otis
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
        </AccordionItemPanel>
    </AccordionItem>
    <div className="signup__container">
      <p className="basic-text">
        Want to organize a delivery for your neighborhood? Sign up to be a community captain <a href="https://forms.gle/x6PHyDfH9GZFvd5N8" className="basic-link">here</a>
      </p>
    </div>
  </Accordion>
  </div>
)

export default Accordions

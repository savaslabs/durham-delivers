import React from 'react';
import Calendar from '../components/calendar';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export const items = [
  { heading: 'July',
    date: 'Tues, July',
    time: '11AM - 12PM',
    calenderLink: '#',
    orderTime: 'order before 10am',
    location: 'Central Park',
    address: '501 Foster St., Durham, NC 27701',
  },
  { heading: 'August',
    date: 'Tues, Aug 4',
    time: '11AM - 12PM',
    calenderLink: '#',
    orderTime: 'order before 10am',
    location: 'Central Park',
    address: '501 Foster St., Durham, NC 27701',
  },
  { heading: 'September',
    date: 'Tues, Aug 4',
    time: '11AM - 12PM',
    calenderLink: '#',
    orderTime: 'order before 10am',
    location: 'Central Park',
    address: '501 Foster St., Durham, NC 27701',
  },
];

const Accordions = () => (
  <div id="calendar">
  <Accordion className="accordion" allowZeroExpanded preExpanded={['a']}>
    <AccordionItem uuid="a">
      <AccordionItemHeading>
        <AccordionItemButton style={{
          borderBottom: `2px solid #828282`,
          cursor: `pointer`
        }}>
          <div className="accordion__header">
            August
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
        <AccordionItemPanel class="accordion__panel">
        <div className="accordion__item-container">
          <div className="accordion__component">
            <div className="accordion__date">
              Tues, July <span style={{margin: `0 15px`}}>|</span> 11AM - 12PM
              <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Test+Event&details=This+is+a+test+event&location=Central+Park%0ADurham%2C+NC&dates=20200815T153000Z%2F20200815T163800Z" target="_blank" rel="noreferrer" class="calendar__btn" style={{
                marginLeft: `20px`
              }}>
                <Calendar />
              </a>
            </div>
            <div className="accordion__order-time">
              Order Before 10AM
            </div>
            <h3>
            Central Park
            </h3>
            <div className="accordion__address">
              501 Foster St., Durham NC 27701
            </div>
              <ul>
                <li>
                  <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                    link to restaurant
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                    link to restaurant
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                    link to restaurant
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                    link to restaurant
                  </a>
                </li>
              </ul>
            </div>
            <div className="accordion__component">
              <div className="accordion__date">
                Tues, July <span style={{margin: `0 15px`}}>|</span> 11AM - 12PM
                <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Test+Event&details=This+is+a+test+event&location=Central+Park%0ADurham%2C+NC&dates=20200815T153000Z%2F20200815T163800Z" target="_blank" rel="noreferrer" class="calendar__btn" style={{
                  marginLeft: `20px`
                }}>
                  <Calendar />
                </a>
              </div>
              <div className="accordion__order-time">
                Order Before 10AM
              </div>
              <h3>
              Central Park
              </h3>
              <div className="accordion__address">
                501 Foster St., Durham NC 27701
              </div>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                      link to restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                      link to restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                      link to restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                      link to restaurant
                    </a>
                  </li>
                </ul>
              </div>
              <div className="accordion__component">
                <div className="accordion__date">
                  Tues, July <span style={{margin: `0 15px`}}>|</span> 11AM - 12PM
                  <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Test+Event&details=This+is+a+test+event&location=Central+Park%0ADurham%2C+NC&dates=20200815T153000Z%2F20200815T163800Z" target="_blank" rel="noreferrer" class="calendar__btn" style={{
                    marginLeft: `20px`
                  }}>
                    <Calendar />
                  </a>
                </div>
                <div className="accordion__order-time">
                  Order Before 10AM
                </div>
                <h3>
                Central Park
                </h3>
                <div className="accordion__address">
                  501 Foster St., Durham NC 27701
                </div>
                  <ul>
                    <li>
                      <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                        link to restaurant
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                        link to restaurant
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                        link to restaurant
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                        link to restaurant
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
        </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem uuid="b">
      <AccordionItemHeading>
        <AccordionItemButton style={{
          borderBottom: `2px solid #828282`,
          cursor: `pointer`
        }}>
          <div className="accordion__header">
            September
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
        <AccordionItemPanel class="accordion__panel">
        <div className="accordion__item-container">
          <div className="accordion__component">
            <div className="accordion__date">
              Tues, July <span style={{margin: `0 15px`}}>|</span> 11AM - 12PM
              <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Test+Event&details=This+is+a+test+event&location=Central+Park%0ADurham%2C+NC&dates=20200815T153000Z%2F20200815T163800Z" target="_blank" rel="noreferrer" class="calendar__btn" style={{
                marginLeft: `20px`
              }}>
                <Calendar />
              </a>
            </div>
            <div  className="accordion__order-time">
              Order Before 10AM
            </div>
            <h3>
            Central Park
            </h3>
            <div className="accordion__address">
              501 Foster St., Durham NC 27701
            </div>
              <ul>
                <li>
                  <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                    link to restaurant
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                    link to restaurant
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                    link to restaurant
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                    link to restaurant
                  </a>
                </li>
              </ul>
            </div>
            <div className="accordion__component">
              <div className="accordion__date">
                Tues, July <span style={{margin: `0 15px`}}>|</span> 11AM - 12PM
                <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Test+Event&details=This+is+a+test+event&location=Central+Park%0ADurham%2C+NC&dates=20200815T153000Z%2F20200815T163800Z" target="_blank" rel="noreferrer" class="calendar__btn" style={{
                  marginLeft: `20px`
                }}>
                  <Calendar />
                </a>
              </div>
              <div className="accordion__order-time">
                Order Before 10AM
              </div>
              <h3>
              Central Park
              </h3>
              <div className="accordion__address">
                501 Foster St., Durham NC 27701
              </div>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                      link to restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                      link to restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                      link to restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                      link to restaurant
                    </a>
                  </li>
                </ul>
              </div>
              <div className="accordion__component">
                <div className="accordion__date">
                  Tues, July <span style={{margin: `0 15px`}}>|</span> 11AM - 12PM
                  <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Test+Event&details=This+is+a+test+event&location=Central+Park%0ADurham%2C+NC&dates=20200815T153000Z%2F20200815T163800Z" target="_blank" rel="noreferrer" class="calendar__btn" style={{
                    marginLeft: `20px`
                  }}>
                    <Calendar />
                  </a>
                </div>
                <div className="accordion__order-time">
                  Order Before 10AM
                </div>
                <h3>
                Central Park
                </h3>
                <div className="accordion__address">
                  501 Foster St., Durham NC 27701
                </div>
                  <ul>
                    <li>
                      <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                        link to restaurant
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                        link to restaurant
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                        link to restaurant
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noreferrer" className="accordion__link">
                        link to restaurant
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

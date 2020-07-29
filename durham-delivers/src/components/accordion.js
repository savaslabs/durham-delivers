import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export const items = [
  { heading: 'July',
    date: 'Tues, July 4 | 11AM - 12PM',
    calenderLink: '#',
    orderTime: 'order before 10am',
    location: 'Central Park',
    address: '501 Foster St., Durham, NC 27701',
  },
  { heading: 'August',
    date: 'Tues, Aug 4 | 11AM - 12PM',
    calenderLink: '#',
    orderTime: 'order before 10am',
    location: 'Central Park',
    address: '501 Foster St., Durham, NC 27701',
  },
  { heading: 'September',
    date: 'Tues, Aug 4 | 11AM - 12PM',
    calenderLink: '#',
    orderTime: 'order before 10am',
    location: 'Central Park',
    address: '501 Foster St., Durham, NC 27701',
  },
];

const Accordions = () => (
  <Accordion style={{
    maxWidth: `1080px`,
    margin: `0 auto`,
    paddingTop: `80px`
  }}>
      {items.map((item) => (
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton style={{
                    borderBottom: `2px solid #828282`,
                    cursor: `pointer`
                  }}

                  >
                    <div className="accordion__header">
                      {item.heading}
                    </div>
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel style={{
                paddingTop: `130px`
              }}>
              <div style={{
                fontFamily: `'Heebo', 'Helvetica', sans-serif`,
                fontSize: `27px`,
                fontWeight: `500`
              }}>
                {item.date}
                <a href={item.calendarLink} style={{
                  marginLeft: `20px`
                }}>
                  <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 9.14746C30 7.18984 30 5.82033 30 5.69043C30 4.23654 28.8172 3.05371 27.3633 3.05371H27.0117V6.27637C27.0117 6.76176 26.6182 7.15527 26.1328 7.15527C25.6474 7.15527 25.2539 6.76176 25.2539 6.27637C25.2539 5.28971 25.2539 2.57137 25.2539 1.58887C25.2539 1.10348 24.8604 0.709961 24.375 0.709961C23.8896 0.709961 23.4961 1.10348 23.4961 1.58887V3.05371H17.6367V6.27637C17.6367 6.76176 17.2432 7.15527 16.7578 7.15527C16.2724 7.15527 15.8789 6.76176 15.8789 6.27637C15.8789 5.28971 15.8789 2.57137 15.8789 1.58887C15.8789 1.10348 15.4854 0.709961 15 0.709961C14.5146 0.709961 14.1211 1.10348 14.1211 1.58887V3.05371H8.26172V6.27637C8.26172 6.76176 7.8682 7.15527 7.38281 7.15527C6.89742 7.15527 6.50391 6.76176 6.50391 6.27637C6.50391 5.28971 6.50391 2.57137 6.50391 1.58887C6.50391 1.10348 6.11039 0.709961 5.625 0.709961C5.13961 0.709961 4.74609 1.10348 4.74609 1.58887V3.05371H2.63672C1.18283 3.05371 0 4.23654 0 5.69043V9.14746H30Z" fill="#4CA897"/>
                    <path d="M0 10.9053V25.1436C0 26.5974 1.18283 27.7803 2.63672 27.7803H27.3633C28.8172 27.7803 30 26.5974 30 25.1436C30 24.7671 30 16.5413 30 10.9053C29.453 10.9053 0.302578 10.9053 0 10.9053ZM8.4375 23.0928H6.5625C6.07711 23.0928 5.68359 22.6993 5.68359 22.2139C5.68359 21.7285 6.07711 21.335 6.5625 21.335H8.4375C8.92289 21.335 9.31641 21.7285 9.31641 22.2139C9.31641 22.6993 8.92289 23.0928 8.4375 23.0928ZM8.4375 19.3428H6.5625C6.07711 19.3428 5.68359 18.9493 5.68359 18.4639C5.68359 17.9785 6.07711 17.585 6.5625 17.585H8.4375C8.92289 17.585 9.31641 17.9785 9.31641 18.4639C9.31641 18.9493 8.92289 19.3428 8.4375 19.3428ZM8.4375 15.5928H6.5625C6.07711 15.5928 5.68359 15.1993 5.68359 14.7139C5.68359 14.2285 6.07711 13.835 6.5625 13.835H8.4375C8.92289 13.835 9.31641 14.2285 9.31641 14.7139C9.31641 15.1993 8.92289 15.5928 8.4375 15.5928ZM15.9375 23.0928H14.0625C13.5771 23.0928 13.1836 22.6993 13.1836 22.2139C13.1836 21.7285 13.5771 21.335 14.0625 21.335H15.9375C16.4229 21.335 16.8164 21.7285 16.8164 22.2139C16.8164 22.6993 16.4229 23.0928 15.9375 23.0928ZM15.9375 19.3428H14.0625C13.5771 19.3428 13.1836 18.9493 13.1836 18.4639C13.1836 17.9785 13.5771 17.585 14.0625 17.585H15.9375C16.4229 17.585 16.8164 17.9785 16.8164 18.4639C16.8164 18.9493 16.4229 19.3428 15.9375 19.3428ZM15.9375 15.5928H14.0625C13.5771 15.5928 13.1836 15.1993 13.1836 14.7139C13.1836 14.2285 13.5771 13.835 14.0625 13.835H15.9375C16.4229 13.835 16.8164 14.2285 16.8164 14.7139C16.8164 15.1993 16.4229 15.5928 15.9375 15.5928ZM23.4375 23.0928H21.5625C21.0771 23.0928 20.6836 22.6993 20.6836 22.2139C20.6836 21.7285 21.0771 21.335 21.5625 21.335H23.4375C23.9229 21.335 24.3164 21.7285 24.3164 22.2139C24.3164 22.6993 23.9229 23.0928 23.4375 23.0928ZM23.4375 19.3428H21.5625C21.0771 19.3428 20.6836 18.9493 20.6836 18.4639C20.6836 17.9785 21.0771 17.585 21.5625 17.585H23.4375C23.9229 17.585 24.3164 17.9785 24.3164 18.4639C24.3164 18.9493 23.9229 19.3428 23.4375 19.3428ZM23.4375 15.5928H21.5625C21.0771 15.5928 20.6836 15.1993 20.6836 14.7139C20.6836 14.2285 21.0771 13.835 21.5625 13.835H23.4375C23.9229 13.835 24.3164 14.2285 24.3164 14.7139C24.3164 15.1993 23.9229 15.5928 23.4375 15.5928Z" fill="#4CA897"/>
                  </svg>
                </a>
              </div>
              <div style={{
                fontFamily: `'Heebo', 'Helvetica', sans-serif`,
                fontWeight: `600`,
                fontSize: `18px`,
                lineHeight: `26px`,
                color: `#4F4F4F`,
                textTransform: `uppercase`,
                letterSpacing: `0.01em`,
                margin: `15px 0`
              }}>
                {item.orderTime}
              </div>
              <h3>
              {item.location}
              </h3>
              <div style={{
                fontFamily: `'Heebo', 'Helvetica', sans-serif`,
                fontWeight: `600`,
                fontSize: `16px`,
                letterSpacing: `0.01em`,
                textTransform: `uppercase`,
                color: `#000000`,
                paddingBottom: `20px`,
                borderBottom: `2px solid #BDBDBD`,
                maxWidth: `max-content`,
                marginBottom: `20px`
              }}>
                {item.address}
              </div>
                <ul>
                  <li>
                    <a href="#" style={{
                      fontSize: `21px`,
                      marginBottom: `10px`,
                      maxWidth: `max-content`
                    }}>
                      link to restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{
                      fontSize: `21px`,
                      marginBottom: `10px`,
                      maxWidth: `max-content`
                    }}>
                      link to restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{
                      fontSize: `21px`,
                      marginBottom: `10px`,
                      maxWidth: `max-content`
                    }}>
                      link to restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{
                      fontSize: `21px`,
                      marginBottom: `10px`,
                      maxWidth: `max-content`
                    }}>
                      link to restaurant
                    </a>
                  </li>
                </ul>
              </AccordionItemPanel>
          </AccordionItem>
      ))}
  </Accordion>
)

export default Accordions

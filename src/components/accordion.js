import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import Calendar from '../components/calendar';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Events() {
  return (
    <StaticQuery
      query={graphql`
        {
          allGoogleSheetAugustRow {
            nodes {
            name
            day
            month
            date
            time
            orderbefore
            address
            specialinstructions
            restaurant1
            specialinstructions
            }
          }
        }
      `}
      render={data => (
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
                {data.allGoogleSheetAugustRow.nodes[0].sheet.map((sheet) => {
                <div className="accordion__item-container">
                  return (
                    <div
                      data-sal="slide-up"
                      data-sal-easing="ease"
                      className="accordion__component"
                    >
                      <div className="accordion__date">
                        {sheet.day}, {data.allGoogleSheetAugustRow.nodes[0].month}, {data.allGoogleSheetAugustRow.nodes[0].date} <span style={{margin: `0 15px`}}>|</span> {data.allGoogleSheetAugustRow.time}
                        <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NnZiYmJiNWNvdmE4ZjRxbm1pcGRocXFjMm8gY190MnVsYnQwNzdlOTIzZzZtM2QxdW5uaThtOEBn&tmsrc=c_t2ulbt077e923g6m3d1unni8m8%40group.calendar.google.com" target="_blank" rel="noreferrer" className="calendar__btn" style={{
                          marginLeft: `20px`
                        }}>
                          <Calendar />
                        </a>
                      </div>
                      <div className="accordion__order-time">
                        {data.allGoogleSheetAugustRow.orderbefore}
                      </div>
                      <div className="accordion__dropoff">
                        {data.allGoogleSheetAugustRow.specialinstructions}
                      </div>
                      <h3>
                      {data.allGoogleSheetAugustRow.name}
                      </h3>
                      <div className="accordion__address">
                        {data.allGoogleSheetAugustRow.address}
                      </div>
                        <ul>
                          <li>
                            <a href="{data.allGoogleSheetAugustRow.restaurant1link}" target="_blank" rel="noreferrer" className="accordion__link">
                              {data.allGoogleSheetAugustRow.restaurant1}
                            </a>
                          </li>
                        </ul>
                      </div>
                    )
                  }

                    </div>
                )
                </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    />
  )
}

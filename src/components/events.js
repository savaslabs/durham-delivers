// import React from "react";
// import { graphql } from "gatsby";
//
// const Item = ({day, month}) => (
//   <div>
//     <h1>{day}</h1>
//     <p>{month}</p>
//   </div>
// )
//
// const Events = ({ data }) => {
//   const nodes = 'GET'(data, "allGoogleSheetProjectsRow.edges", [])
//
//   return (<div>{nodes.map(node => <Item key={node.id} {...node} />)}</div>)
// }
//
//
// export default Events;
//
// // GraphQL query to our spreadsheet
// export const query = graphql`
//   query {
//     allGoogleSheetProjectsRow {
//       edges {
//         node {
//           id
//           day
//           month
//           date
//           time
//           order before
//           location
//           address
//           restaurants
//         }
//       }
//     }
//   }
// `;

// Initialize dotenv, for protected Airtable API storage
require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Durham Delivers`,
    description: `Durham Delivers partners with local restaurants to create community food deliveries to parks and other spaces in Durham`,
    author: `@gatsbyjs`,
    image: "../src/images/social-img.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-61514316-3",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        rootMargin: "0% 0%",
        threshold: 0.2,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // Necessary for processing images as attachments from Airtable
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: `appHnugz6zRl71EGT`,
            tableName: `Events`,
            tableLinks: [`location_ref`, `restaurants`],
            defaultValues: {
              location_ref: "",
              start: "",
              end: "",
              order_by: "",
              instructions: "",
              restaurants: "",
              calendar_link: "",
            },
          },
          {
            baseId: `appHnugz6zRl71EGT`,
            tableName: `Restaurants`,
            mapping: { logo: `fileNode` },
            defaultValues: {
              name: "",
              logo: [],
              url: "",
            },
          },
          {
            baseId: `appHnugz6zRl71EGT`,
            tableName: `Locations`,
            defaultValues: {
              location_name: "",
              location_address: "",
              location_image: "",
            },
          },
        ],
      },
    },
  ],
};

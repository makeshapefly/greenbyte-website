module.exports = {
  siteMetadata: {
    title: `GreenByte`,
    description: `Net zero technologists`,
    author: `@r-ichard`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -70,
      },
    },
    {
      resolve: "gatsby-source-blogger",
      options: {
        apiKey: "AIzaSyARMfeKc_DcHpof49x0W0XdNjLqXkCu-VU",
        blogId: "6355049226979332769",
        downloadImage: true,
      },
    },
    {
      resolve: "gatsby-source-medium",
      options: {
        username: "@rashidali_97677",
      },
    },
  ],
};

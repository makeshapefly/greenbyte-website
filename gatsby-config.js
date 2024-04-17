module.exports = {
  siteMetadata: {
    title: `Nerko - NFT Portfolio Gatsby Template`,
    description: `Nerko is a NFT Portfolio and Landing Gatsby template that can be used to build your own NFT Portfolio page. A best designed NFT blockchain, crypto, crypto art, digital and many more purpose Gatsby Template.`,
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
        offset: -70
      }
    }
  ],
}

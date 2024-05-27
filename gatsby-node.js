/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allBloggerPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  result.data.allBloggerPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve("./src/pages/blog-details.js"),
      context: {
        slug: node.slug,
      },
    });
  });
};

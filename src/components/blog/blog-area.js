import React from "react";
import BlogSidebar from "./blog-sidebar";
import SingleBlog from "./single-blog";
import { graphql, useStaticQuery } from "gatsby";

const BlogArea = () => {
  const mediumData = useStaticQuery(graphql`
    query {
      allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            id
            title
            virtuals {
              subtitle
              previewImage {
                imageId
              }
            }
            author {
              name
            }
          }
        }
      }
    }
  `);
  console.log(mediumData);
  return (
    <section className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {mediumData.allMediumPost.edges.map((blog) => (
              <SingleBlog key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;

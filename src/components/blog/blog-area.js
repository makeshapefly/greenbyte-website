import React from "react";
import SingleBlog from "./single-blog";
import { graphql, useStaticQuery } from "gatsby";

const BlogArea = () => {
  const blog_data = useStaticQuery(graphql`
    query {
      allBloggerPost {
        edges {
          node {
            slug
            id
            title
            content
            published
            author {
              id
              displayName
              url
              image {
                url
              }
            }
            replies {
              totalItems
              selfLink
            }
          }
        }
      }
    }
  `);
  return (
    <section className="blog-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {blog_data.allBloggerPost.edges.map((blog) => (
              <SingleBlog key={blog.node.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;

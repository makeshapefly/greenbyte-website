import React from "react";
import BlogSidebar from "./blog-sidebar";
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
        <div className="row">
          <div className="col-lg-8">
            {blog_data.allBloggerPost.edges.map((blog) => (
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

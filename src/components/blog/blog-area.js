import React from "react"
import blog_data from "../../data/blog-data"
import BlogSidebar from "./blog-sidebar"
import SingleBlog from "./single-blog"

const BlogArea = () => {
  return (
    <section className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blog_data.map(blog => (
              <SingleBlog key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogArea

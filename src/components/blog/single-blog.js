import { Link } from "gatsby";
import React from "react";

const SingleBlog = ({ blog }) => {
  return (
    <div className="blog-post-item">
      <div className="blog-post-thumb">
        <Link to="/blog-details">
          <img src={blog.img} alt="img" />
        </Link>
      </div>
      <div className="blog-post-content">
        <div className="blog-post-meta">
          <ul className="list-wrap">
            <li>
              <i className="far fa-user"></i>
              <Link to="/blog">{blog.user}</Link>
            </li>
            <li>
              <i className="far fa-calendar-alt"></i>
              {blog.date}
            </li>
            <li>
              <i className="far fa-comments"></i>
              <a href="#">{blog.comments} Comments</a>
            </li>
          </ul>
        </div>
        <h2 className="title">
          <Link to="/blog-details">{blog.title}</Link>
        </h2>
        <p>{blog.desc}</p>
      </div>
    </div>
  )
}

export default SingleBlog

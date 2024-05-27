import { Link } from "gatsby";
import React from "react";
import parse from "react-html-parser";
import { formatDate } from "../../utils/format";
import CopyButton from "../copy-button/CopyButton";

const SingleBlog = ({ blog }) => {
  const { slug, published, title, content, author } = blog.node;
  const year = new Date(published).getFullYear();
  let month = new Date(published).getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  const shareUrl = `https://greenbyteuk.blogspot.com/${year}/${month}/${slug}.html`;

  const contentPreview = content?.substring(0, 300) + "...";

  return (
    <div className="blog-post-item">
      <div className="blog-post-content">
        <div className="blog-post-meta">
          <ul className="list-wrap">
            <li>
              <i className="far fa-user"></i>
              <Link to={`/blog/${slug}`}>{author?.displayName}</Link>
            </li>
            <li>
              <i className="far fa-calendar-alt"></i>
              {formatDate(published)}
            </li>
            <li>
              <i className="fas fa-copy"></i>
              <CopyButton linkToCopy={shareUrl} />
            </li>
          </ul>
        </div>
        <h2 className="title">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p>{parse(contentPreview)}</p>
      </div>
    </div>
  );
};

export default SingleBlog;

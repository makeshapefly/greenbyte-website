import { Link } from "gatsby";
import React from "react";
import parse from "react-html-parser";
import { formatDate } from "../../utils/format";
import CopyButton from "../copy-button/CopyButton";

const SingleBlog = ({ blog }) => {
  const shareUrl = `https://medium.com/@${blog.node.author.username}/${blog.node.slug}-${blog.node.medium_id}`;
  const mediumUrl = `https://medium.com/@${blog.node.author.username}`;
  const imageUrl = `https://miro.medium.com/v2/resize:fit:828/format:webp/${blog.node.virtuals.previewImage.imageId}`;

  return (
    <div className="blog-post-item">
      <div className="blog-post-thumb">
        <Link to={shareUrl}>
          <img src={imageUrl} alt="img" />
        </Link>
      </div>
      <div className="blog-post-content">
        <div className="blog-post-meta">
          <ul className="list-wrap">
            <li>
              <i className="far fa-user"></i>
              <Link to={mediumUrl}>{blog.node.author.name}</Link>
            </li>
            <li>
              <i className="far fa-calendar-alt"></i>
              {formatDate(blog.node.createdAt)}
            </li>
            <li>
              {/* Copy button */}
              <i className="fas fa-copy"></i>
              <CopyButton linkToCopy={shareUrl} />
            </li>
          </ul>
        </div>
        <h2 className="title">
          <Link to={shareUrl}>{blog.node.title}</Link>
        </h2>
        <p>{parse(blog.node.content.subtitle)}</p>
      </div>
    </div>
  );
};

export default SingleBlog;

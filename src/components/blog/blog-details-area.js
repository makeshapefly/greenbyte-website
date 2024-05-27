import React from "react";
import parse from "react-html-parser";
import { formatDate } from "../../utils/format";
import CopyButton from "../copy-button/CopyButton";

const BlogDetailsArea = ({ blog }) => {
  const { slug, published, title, content, author } = blog;
  const year = new Date(published).getFullYear();
  let month = new Date(published).getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  const shareUrl = `https://greenbyteuk.blogspot.com/${year}/${month}/${slug}.html`;

  return (
    <section className="blog-area" style={{ marginTop: "150px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="blog-post-meta">
              <ul className="list-wrap">
                <li>
                  <i className="far fa-user"></i>
                  {author.displayName}
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
            <h2 className="title">{title}</h2>
            <div>{parse(content)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;

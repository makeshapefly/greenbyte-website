import { Link } from 'gatsby';
import React from 'react';

const BlogSidebar = () => {
  return (
    <aside className="blog-sidebar">
      <div className="widget">
        <h3 className="widget-title">Search Here</h3>
        <div className="sidebar-search-form position-relative">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button type="submit"><i className="fas fa-search"></i></button>
          </form>
        </div>
      </div>
      <div className="widget widget_categories">
        <h3 className="widget-title">Categories</h3>
        <ul>
          <li><a href="#">Forensic science</a><span className="float-right">12</span></li>
          <li><a href="#">Gemological</a><span className="float-right">16</span></li>
          <li><a href="#">UI/UX Deisgn</a><span className="float-right">14</span></li>
          <li><a href="#">Uncategorized</a><span className="float-right">29</span></li>
        </ul>
      </div>
      <div className="widget">
        <h3 className="widget-title">Recent Post</h3>
        <div className="rc-post-wrap">
          <div className="rc-post-item">
            <div className="rc-post-thumb">
              <a href="#"><img src="/assets/img/blog/blog_post06.jpg" alt="img" /></a>
            </div>
            <div className="rc-post-content">
              <span className="date"><i className="far fa-calendar-alt"></i> October 27, 2023</span>
              <h5 className="title"><Link to="/blog-details">New Trends In UI/UX Design World</Link></h5>
            </div>
          </div>
          <div className="rc-post-item">
            <div className="rc-post-thumb">
              <a href="#"><img src="/assets/img/blog/blog_post05.jpg" alt="img" /></a>
            </div>
            <div className="rc-post-content">
              <span className="date"><i className="far fa-calendar-alt"></i> October 27, 2023</span>
              <h5 className="title"><Link to="/blog-details">That Time We Burned Players</Link></h5>
            </div>
          </div>
          <div className="rc-post-item">
            <div className="rc-post-thumb">
              <a href="#"><img src="/assets/img/blog/blog_post04.jpg" alt="img" /></a>
            </div>
            <div className="rc-post-content">
              <span className="date"><i className="far fa-calendar-alt"></i> October 27, 2023</span>
              <h5 className="title"><Link to="/blog-details">Morning routine boost to your mood</Link></h5>
            </div>
          </div>
        </div>
      </div>
      <div className="widget widget_categories">
        <h3 className="widget-title">Popular Tag</h3>
        <div className="tagcloud">
          <a href="#">apps</a>
          <a href="#">NFT</a>
          <a href="#">Blockchain</a>
          <a href="#">Digital</a>
          <a href="#">Art</a>
          <a href="#">Backend</a>
          <a href="#">website</a>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
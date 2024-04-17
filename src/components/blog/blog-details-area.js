import { Link } from 'gatsby';
import React from 'react';
import BlogSidebar from './blog-sidebar';

const BlogDetailsArea = () => {
  return (
    <section className="blog-area blog-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-post-item">
              <div className="blog-post-thumb">
                <img src="/assets/img/blog/blog_post01.jpg" alt="img" />
              </div>
              <div className="blog-post-content blog-details-content">
                <div className="blog-post-meta">
                  <ul className="list-wrap">
                    <li><i className="far fa-user"></i><Link to="/blog">Artwork</Link></li>
                    <li><i className="far fa-calendar-alt"></i> 28 Sept 2023</li>
                    <li><i className="far fa-comments"></i><a href="#">3 Comments</a></li>
                  </ul>
                </div>
                <h2 className="title">Minimal workspace for inspiration</h2>
                <p>Repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit. consequatur amet aliquam nesciunt nemo, deserunt facilis. Duis aute irure dolor voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, aperiam ipsquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor consequuntur sit amet</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, aperiam ipsquae ab illo inventore veritatis et quasi architecto beatae vitae dicta consequuntur sunt voluptatem voluptas explicabo</p>
                <div className="blog-inner-wrapper">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="blog-inner-content">
                        <h4 className="blog-inner-title">Our Approach</h4>
                        <p>Must explain to you how all praising uts pain was born and I will gives you a itself completed account of the system.</p>
                        <ul className="list-wrap">
                          <li><i className="fas fa-check"></i>Extramural Funding</li>
                          <li><i className="fas fa-check"></i>Bacteria Markers omnis</li>
                          <li><i className="fas fa-check"></i>Nam nec mi euismod euismod</li>
                          <li><i className="fas fa-check"></i>Sunt voluptatem voluptas</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="blog-inner-images">
                        <img src="/assets/img/blog/blog_post03.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-inner-wrapper">
                  <div className="blog-inner-content">
                    <h4 className="blog-inner-title">What Is A Business Technology Roadmap?</h4>
                    <p>Unlike detailed blueprints that lay out all tasks, deadlines, bug reports, and more along the way, technology roadmaps are high-level visual summaries highlighting a vision or plans.</p>
                    <p>In an Agile approach, a technology roadmap feeds the sprint and grooming processes, providing insight into how the product will travel from start to finish it makes it easier.</p>
                  </div>
                </div>
                <div className="blog-inner-wrapper">
                  <div className="row gx-4">
                    <div className="col-sm-6">
                      <div className="blog-inner-img">
                        <img src="/assets/img/blog/blog_post05.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="blog-inner-img">
                        <img src="/assets/img/blog/blog_post06.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-details-bottom">
                  <div className="row">
                    <div className="col-xl-6 col-md-7">
                      <div className="tg-post-tag">
                        <h5 className="tag-title">Post Tags :</h5>
                        <ul className="list-wrap mb-0">
                          <li><a href="#" rel="tag">Design</a></li>
                          <li><a href="#" rel="tag">website</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-5">
                      <div className="blog-details-social text-md-end">
                        <h5 className="social-title">Social Share :</h5>
                        <ul className="list-wrap mb-0">
                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                          <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;
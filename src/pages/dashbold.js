import React from "react";
import Layout from "../layout/layout";

const Dashbold = () => {
  return (
    <div className="single single-post">
      <Layout page={true}>
        <section className="blog-area blog-details-area" style={{ marginTop: 150 }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-post-item">
                  <div className="blog-post-thumb">
                    {/*<img src="/assets/img/retrofit/great_collaboration.webp" alt="img" /> */}
                  </div>
                  <div className="blog-post-content blog-details-content">
                    <h2 className="title">DashBold</h2>
                    <p>DashBold is a GreenByte product due for release in August 2024.</p>
                    <p>It's commonly accepted that to meet 2050 Net Zero goals and help eliminate fuel poverty, a joined up approach to improving the energy efficiency of homes and transitioning to cleaner primary sources of household energy is required.</p>
                    <p>The missing piece of the puzzle is a consolidated dashboard view of an individual household's current position in relation to energy consumption and loss together with an action plan or roadmap to improve this position.</p>
                    <div className="blog-inner-wrapper">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          <div className="blog-inner-content">
                            <h4 className="blog-inner-title">What's needed?</h4>
                            <ul className="list-wrap">
                              <li><i className="fas fa-check"></i>Sprint attendance and organisation</li>
                              <li><i className="fas fa-check"></i>Consulting and expertise</li>
                              <li><i className="fas fa-check"></i>Development</li>
                              <li><i className="fas fa-check"></i>Creation of single sign on</li>
                              <li><i className="fas fa-check"></i>Data modelling.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                   {/*} <div className="blog-inner-wrapper">
                      <div className="blog-inner-content">
                        <h4 className="blog-inner-title">Some of our partners</h4>
                        <p>We're working with like-minded groups across the UK.</p>
                        <p>The more people share and collaborate, the more powerful we will be as agents of change across the country.</p>
                      </div>
                    </div>
                    <div className="blog-inner-wrapper">
                      <div className="row gx-4">
                        <div className="col-sm-6">
                          <div className="blog-inner-img">
                            <a href="https://www.sportengland.org/" target="_blank">
                              <img src="/assets/img/retrofit/sport_england.png" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="blog-inner-img">
                            <a href="https://www.norfolk.gov.uk/" target="_blank">
                              <img src="/assets/img/retrofit/norfolk_council.jpeg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
  </div> */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}
export default Dashbold
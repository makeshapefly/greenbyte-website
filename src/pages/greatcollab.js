import React from "react";
import { Seo } from "../components/seo";
import Layout from "../layout/layout";
import GradientPosition from "../components/gradient-position";
import Breadcrumb from "../components/common/breadcrumb";
import ProjectDetailsArea from "../components/projects/project-area";

const RetrofitPage = () => {
  return (
    <div className="single single-post">
      <Layout page={true}>
        <section className="blog-area blog-details-area" style={{ marginTop: 150 }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-post-item">
                  <div className="blog-post-thumb">
                    <img src="/assets/img/retrofit/great_collaboration.webp" alt="img" />
                  </div>
                  <div className="blog-post-content blog-details-content">
                    <h2 className="title">The journey to Net Zero</h2>
                    <p>Explore The Great Collaboration, your Toolkit for choosing and recording your carbon reducing actions, influencing local council policy and making life better where you live. For everyone. For free. </p>
                    <div className="blog-inner-wrapper">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <div className="blog-inner-content">
                            <h4 className="blog-inner-title">Our Involvement</h4>
                            <ul className="list-wrap">
                              <li><i className="fas fa-check"></i>Sprint attendance and organisation</li>
                              <li><i className="fas fa-check"></i>Consulting and expertise</li>
                              <li><i className="fas fa-check"></i>Development</li>
                              <li><i className="fas fa-check"></i>Creation of single sign on</li>
                              <li><i className="fas fa-check"></i>Data modelling.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="blog-inner-images">
                            <a href="https://greatcollaboration.uk/the-toolkit/" target="_blank">
                              <p className="header-btn">
                                <button
                                  className="btn border-btn"
                                  data-bs-target="https://greatcollaboration.uk/the-toolkit/"
                                >
                                  Open the Toolkit
                                </button>
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-inner-wrapper">
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
                    </div>

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
export default RetrofitPage

export const Head = () => <Seo title="Retrofit" />

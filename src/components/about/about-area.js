import { noAuto } from "@fortawesome/fontawesome-svg-core";
import React from "react";

const AboutArea = () => {
  return (
    <section
      id="about"
      className="about-area section-pt-70 section-pb-80"
      style={{ marginTop: 20, background: "#e8f6d4", color: "#000" }}
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        ></div>
        <div className="about__row-reverse">
          <div className="row align-items-center">
            <div className="section__title text-center title-mb-60">
              <h2 className="title" style={{ fontSize: 52 }}>
                About <span className="tg-text-gradient">Us</span>
              </h2>
            </div>
            <div
              className="col-lg-6"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
                style={{ width: "60%", marginLeft: "100px" }}
              >
                <img src="/assets/img/others/l2-content-img-2.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <p style={{ marginTop: 90, color: "#000" }}>
                  We are a team of carbon reduction consultants, software and
                  data engineers, and community activists engaged in a broad
                  range of initiatives to lower harmful emissions and build
                  sustainable local communities.
                </p>
                <ul className="list-unstyled">
                  <li className="list-item">
                    <i className="check-icon">&#10003;</i>
                    Technology that is accessible to communities and facilitates
                    change
                  </li>
                  <li className="list-item">
                    <i className="check-icon">&#10003;</i>
                    Data that informs the decision making process
                  </li>
                  <li className="list-item">
                    <i className="check-icon">&#10003;</i>
                    Physical infrastructure that solves today's problems
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <img src="/assets/img/others/about-img1.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
              >
                <p style={{ color: "#000" }}>
                  We help clients with their Net Zero initatives.
                  <br />
                  <br />
                  We bring people, data and technology together to reach
                  incredible outcomes.
                  <br />
                  <br />
                  Nothing is beyond our remit in the quest to help individuals,
                  communities, councils, businesses and Government to reduce
                  harmful emissions.
                </p>
                <div
                  className="about__facts-list"
                  style={{
                    display: "flex",
                  }}
                >
                  <div
                    className="about__icon-box"
                    style={{
                      maxWidth: "200px",
                    }}
                  >
                    <div style={{ padding: 20 }}>
                      <img
                        src="/assets/img/retrofit/advise.svg"
                        alt="Advise"
                        width={"50px"}
                      />
                    </div>
                    <h5>Consult</h5>
                  </div>
                  <div
                    className="about__icon-box"
                    style={{
                      maxWidth: "250px",
                    }}
                  >
                    <div style={{ padding: 20 }}>
                      <img
                        src="/assets/img/retrofit/collaborate.svg"
                        alt="Collaborate"
                        width={"50px"}
                      />
                    </div>
                    <h5>Collabarate</h5>
                  </div>
                  <div
                    className="about__icon-box"
                    style={{
                      maxWidth: "180px",
                    }}
                  >
                    <div style={{ padding: 20 }}>
                      <img
                        src="/assets/img/retrofit/build.svg"
                        alt="Build"
                        width={"50px"}
                      />
                    </div>
                    <h5>Build</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;

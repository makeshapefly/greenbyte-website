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
        </div>
      </div>
    </section>
  );
};

export default AboutArea;

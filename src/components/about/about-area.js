import React from "react";

const AboutArea = () => {
  return (
    <section id="about" className="about-area section-pt-70 section-pb-80">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">About Us</h2>
            </div>
          </div>
        </div>
        <div className="about__row-reverse">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
              >
                <img src="/assets/img/others/image.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <div className="section__title text-start">
                  <h1 className="sub-title tg-text-gradient">
                    Who We Are
                  </h1>
                </div>
                <p>
                We are a team of carbon reduction consultants, software and data engineers, and community activists engaged in a broad range of initiatives to lower harmful emissions and build sustainable local communities.
                </p>
                <ul className="list-unstyled">
                <li className="list-item">
                  <i className="check-icon">&#10003;</i> 
                  Technology that is accessible to communities and facilitates change
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
                <div className="section__title text-start">
                  <h1 className="sub-title tg-text-gradient">
                   What We Do
                  </h1>
                  {/* <h2 className="title">What we do</h2> */}
                </div>
                <p>
                We help clients achieve the best business outcomes in their ongoing digital transformation and NetZero journey, with a pragmatic approach, and the right technology.<br/><br/>
                We bring together the best business strategists and technologists to deliver transformational impact.<br/><br/>
                Our goal is never change for the sake of it. We work on technology changes that matters, making them more efficient, more effective, and more sustainability.
                </p>
                <div className="about__facts-list">
                  <div className="about__icon-box">
                    <div className="icon">
                      <i className="unicon-select-window"></i>
                    </div>
                    <h5>Advice</h5>
                  </div>
                  <div className="about__icon-box">
                    <div className="icon">
                      <i className="unicon-building"></i>
                    </div>
                    <h5>Build</h5>
                  </div>
                  <div className="about__icon-box">
                    <div className="icon">
                      <i className="unicon-collaborate"></i>
                    </div>
                    <h5>Collabarate</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutArea

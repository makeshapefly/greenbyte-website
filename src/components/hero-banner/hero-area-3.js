import React from "react";

const HeroAreaThree = () => {
  return (
    <section className="banner-area banner-style-three position-relative">
      <div className="banner__background-wrap">
        <div
          className="background"
          style={{ backgroundImage: "url(/assets/img/bg/gradient_bg02.png" }}
        ></div>
      </div>
      <div className="banner__three-inner">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div
                className="banner__content"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
              >
                <h2 className="title">Efficient Homes Dashboards</h2>
                <p className="desc">
                  A free to use energy efficiency portal for every property in the UK.
                </p>
                <a
                  href="https://opensea.io/"
                  target="_blank"
                  className="banner__btn btn scroll-to-target"
                  style={{background: 'blue'}}
                >
                  <span>More</span>
                  <i className="unicon-arrow-up-right"></i>
                </a>
                <div className="banner__community">
                  <ul className="list-wrap banner__community-members">
                    <li>
                      <img
                        src="/assets/img/others/property.png"
                        width="48"
                        alt="members"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/others/property.png"
                        width="48"
                        alt="members"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/others/property.png"
                        width="48"
                        alt="members"
                      />
                    </li>
                  </ul>
                  <div className="banner__community-numbers">
                    <h5 className="count">29 million homes</h5>
                    <span>Towards Net Zero</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/assets/img/bg/dashboard2.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAreaThree

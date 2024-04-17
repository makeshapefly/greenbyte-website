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
                <h2 className="title">High Quality NFT Collection</h2>
                <p className="desc">
                  A 890 piece custom Nerko's collection is joining the NFT space
                  on Opensea.
                </p>
                <a
                  href="https://opensea.io/"
                  target="_blank"
                  className="banner__btn btn gradient-btn gradient-btn-2 scroll-to-target"
                >
                  <span>View in OPENSEA</span>
                  <i className="unicon-arrow-up-right"></i>
                </a>
                <div className="banner__community">
                  <ul className="list-wrap banner__community-members">
                    <li>
                      <img
                        src="/assets/img/team/07.png"
                        width="48"
                        alt="members"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/team/03.png"
                        width="48"
                        alt="members"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/team/01.png"
                        width="48"
                        alt="members"
                      />
                    </li>
                  </ul>
                  <div className="banner__community-numbers">
                    <h5 className="count">47k+</h5>
                    <span>Community members</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner__images-two"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
              >
                <img
                  className="shape-one"
                  width="40"
                  src="/assets/img/objects/circle-01.svg"
                  alt="object"
                  style={{ top: '-8%',right:"40%"}}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                />

                <img
                  className="shape-two"
                  width="64"
                  src="/assets/img/objects/star-01.svg"
                  alt="object"
                  style={{ top: '24%',right:"24%"}}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                />

                <img
                  className="shape-three"
                  width="80"
                  src="/assets/img/objects/star-03.svg"
                  alt="object"
                  style={{ top: '0%',right:"0%"}}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                />

                <img
                  className="shape-four"
                  width="40"
                  src="/assets/img/objects/circle-02.svg"
                  alt="object"
                  style={{ bottom: '16%',left:"-8%"}}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                />
                <img
                  className="shape-five"
                  width="64"
                  src="/assets/img/objects/star-02.svg"
                  alt="object"
                  style={{ bottom: '24%',left:"10%"}}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                />

                <img
                  className="shape-six"
                  width="80"
                  src="/assets/img/objects/square-round.svg"
                  alt="object"
                  style={{ bottom: '0%',left:"24%"}}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                />

                <div className="banner__images-grid-two">
                  <div
                    className="image-grid-item"
                    style={{ transform: 'rotate(10.84deg)' }}
                  >
                    <div className="main-image">
                      <canvas width="272" height="272"></canvas>
                      <img src="/assets/img/artwork/06.jpg" alt="artwork" />
                    </div>
                  </div>
                  <div className="image-grid-item">
                    <div className="main-image">
                      <canvas width="272" height="272"></canvas>
                    </div>
                  </div>
                  <div className="image-grid-item">
                    <div className="main-image">
                      <canvas width="272" height="272"></canvas>
                    </div>
                  </div>
                  <div
                    className="image-grid-item"
                    style={{ transform: 'rotate(-10.25deg)' }}
                  >
                    <div className="main-image">
                      <canvas width="272" height="272"></canvas>
                      <img src="/assets/img/artwork/16.jpg" alt="artwork" />
                    </div>
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

export default HeroAreaThree

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
              <h2 className="title">About the platform</h2>
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
                <img src="/assets/img/others/features-03.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">
                    Create and Invest
                  </span>
                  <h2 className="title">
                    Create your <br /> own NFT
                  </h2>
                </div>
                <p>
                  Multiple Chains, One Home. Stack up all your NFTs from across
                  blockchains.
                </p>
                <div className="about__facts-list">
                  <div className="about__fact-item">
                    <h3 className="count">4,500+</h3>
                    <p>
                      Collections Indexed <br /> every 5mins.
                    </p>
                  </div>
                  <div className="about__fact-item">
                    <h3 className="count">2.5x</h3>
                    <p>Difference in Floor & Estimated NFT Value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <img src="/assets/img/others/features-02.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">
                    Sync and Track
                  </span>
                  <h2 className="title">Multiple Chains, One Home</h2>
                </div>
                <p>
                  We make it easy to Discover, Invest and manage all your NFTs
                  at one place, looked up one of the more obscure.Find the right
                  NFT collections to buy within the platform.
                </p>
                <div className="about__facts-list">
                  <div className="about__icon-box">
                    <div className="icon">
                      <i className="unicon-select-02"></i>
                    </div>
                    <p>Collections Indexed every 5mins.</p>
                  </div>
                  <div className="about__icon-box">
                    <div className="icon">
                      <i className="unicon-select-window"></i>
                    </div>
                    <p>Difference in Floor & Estimated Value</p>
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

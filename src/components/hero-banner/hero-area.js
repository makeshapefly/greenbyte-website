import React, { useRef, useEffect } from 'react';

const HeroArea = () => {
  const animate_1 = useRef(null);
  const animate_2 = useRef(null);
  const animate_3 = useRef(null);
  const animate_4 = useRef(null);
  const animate_5 = useRef(null);
  const animate_6 = useRef(null);
  const animate_7 = useRef(null);

  useEffect(() => {

  }, [])
  return (
    <>
      <section className="banner-area banner-padding position-relative">
        <div className="banner__background-wrap">
          <div
            className="background"
            style={{ backgroundImage: "url(/assets/img/bg/gradient_bg01.png" }}
          ></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="banner__content"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
              >
                <h2 className="title">Net zero technologists</h2>
                <p className="desc">
                People, data and technology combined = Positive Outcomes for the Planet
                </p>
                {/* <a
                  href="https://opensea.io/"
                  target="_blank"
                  className="banner__btn btn gradient-btn"
                >
                  <span>View in OPENSEA</span>{" "}
                  <i className="unicon-arrow-right"></i>
                </a> */}
              </div>
            </div>
            <div className="col-lg-6">
              
            <div className="banner__images-grid">
                  <div className="left">
                    <img src="/assets/img/artwork/Himg-bgremoved.png" alt="artwork" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroArea

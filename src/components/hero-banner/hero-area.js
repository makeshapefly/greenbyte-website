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
                 <img
                  src="/assets/img/objects/circle.png"
                  width="16"
                  alt="object"
                  style={{ top: "14%", left: "-12%" }}
                  ref={animate_3}
                />
                  <img
                  src="/assets/img/objects/circle-03.png"
                  width="24"
                  alt="object"
                  style={{ bottom: "-30%", left: "12%" }}
                  ref={animate_4}
                />
                <h2 className="title">Net zero technologists</h2>
                <p className="desc">
                People, data and technology combined = Positive Outcomes for the Planet
                </p>
              </div>
            </div>
            <div className="col-lg-6">
            <div className="banner__images-grid">
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
                  src="/assets/img/objects/star-05.svg"
                  alt="object"
                  style={{right:"0%"}}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                />
                <img
                  className="shape-four"
                  width="40"
                  src="/assets/img/objects/circle-02.svg"
                  alt="object"
                  style={{ bottom: '0%',left:"-15%"}}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                />
                <img
                  className="shape-five"
                  width="64"
                  src="/assets/img/objects/start-04.svg"
                  alt="object"
                  style={{ bottom: '24%',left:"-10%"}}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                />
                  <div className="left">
                    <img src="/assets/img/artwork/Himg-bgremoved.png" alt="artwork" />
                  </div>
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

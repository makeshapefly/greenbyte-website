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
                <h2 className="title" style={{ marginTop: 60 }}>Net zero technologists</h2>
                <p>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12" style={{ fontSize: 24, color: '#000' }}>
                        people <img src="/assets/img/retrofit/icons8-sum-50.png" />
                        data <img src="/assets/img/retrofit/icons8-sum-50.png" />
                        technology
                      </div>
                    </div>
                  </div>
                </p>
                <div style={{marginTop: 50}}>
                <a href="#about" class="btn btn-outline-success" role="button" aria-pressed="true">Tell me more -></a>
                </div>
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
                    style={{ top: '-8%', right: "40%" }}
                    data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                  />
                  <img
                    className="shape-two"
                    width="64"
                    src="/assets/img/objects/star-05.svg"
                    alt="object"
                    style={{ right: "0%" }}
                    data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                  />
                  <img
                    className="shape-four"
                    width="40"
                    src="/assets/img/objects/circle-02.svg"
                    alt="object"
                    style={{ bottom: '0%', left: "-15%" }}
                    data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                  />
                  <img
                    className="shape-five"
                    width="64"
                    src="/assets/img/objects/start-04.svg"
                    alt="object"
                    style={{ bottom: '24%', left: "-10%" }}
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

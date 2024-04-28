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
      <section className="banner-area banner-padding position-relative" style={{ paddingTop: 0, marginTop: 90 }}>
        <div className="banner__background-wrap" style={{ top: 0 }}>
          <div
            className="background"
            style={{ backgroundImage: "url(/assets/img/retrofit/streetscape.jpg)" }}
          ></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div
                style={{ paddingTop: 0, marginTop: 150 }}
                className="banner__content"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
              >
                <h2 className="title">Net zero technologists</h2>
                <p>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12" style={{ fontSize: 24, color: '#000', marginTop: 10 }}>
                        people <img src="/assets/img/retrofit/icons8-sum-50.png" />
                        data <img src="/assets/img/retrofit/icons8-sum-50.png" />
                        technology
                      </div>
                    </div>
                  </div>
                </p>
                <div style={{ marginTop: 50 }}>
                  <a href="#about" class="btn btn-outline-success" role="button" aria-pressed="true">Tell me more -></a>
                </div>
              </div>
            </div>
            <div className="col-3 d-none d-sm-block d-sm-none d-md-block">
              <div className="banner__images-grid">
                <div
                  className="banner__images-two"
                  data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
                >
                  <img
                    className="shape-two"
                    width="64"
                    src="/assets/img/objects/star-05.svg"
                    alt="object"
                    style={{ top: '200px' }}
                    data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                  />
                  <img
                    className="shape-five"
                    width="64"
                    src="/assets/img/objects/start-04.svg"
                    alt="object"
                    style={{ left: '70px', top: '140px'}}
                    data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                  />
                  <div style={{ marginTop: 80 }}>
                    <img
                      className="shape-four"
                      width="64"
                      src="/assets/img/objects/star-05.svg"
                      alt="object"
                      data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                    />
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="blog-inner-images">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroArea

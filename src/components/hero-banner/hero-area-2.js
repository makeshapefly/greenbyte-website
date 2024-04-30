import React from "react"

const HeroAreaTwo = () => {
  return (
    <section className="banner-area banner-style-two position-relative" style={{ minHeight: '80vh' }}>
      <div className="banner__background-wrap">
        <div
          className="background"
          style={{ backgroundImage: "url(/assets/img/retrofit/streetscape.jpg)", opacity: 0.1 }}
        ></div>
      </div>
      <div className="container">
        <div>
          <div
            className="banner__images-two"
          >
            <img
              className="shape-two"
              width="64"
              src="/assets/img/objects/star-05.svg"
              alt="object"
              style={{ top: '-70px', left: '95%' }}
              data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
            />
            <img
              className="shape-five"
              width="64"
              src="/assets/img/objects/start-04.svg"
              alt="object"
              style={{ top: '-70px', left: '0%' }}
              data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">

            <div
              className="banner__content-two"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
            </div>

              <h2 className="title" style={{ fontSize: 52, lineHeight: 1 }}>Net Zero <span className="tg-text-gradient">Technologists</span></h2>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12" style={{ fontSize: 32, color: '#000', marginTop: 30 }}>
                    people <img src="/assets/img/retrofit/icons8-sum-50.png" />
                    data <img src="/assets/img/retrofit/icons8-sum-50.png" />
                    technology
                  </div>
                </div>

              <li className="header-btn" style={{ marginTop: 40 }}>
                <a href="#people-data">
                  <button
                    className="btn border-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#connectModal"
                    style={{ border: '3px solid', color: 'green', background: 'green' }}
                  >
                    <span style={{ fontSize: 48, width: 100, color: '#FFF' }}>=</span>
                  </button>
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAreaTwo

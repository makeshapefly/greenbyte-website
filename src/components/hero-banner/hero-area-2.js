import React from "react"

const HeroAreaTwo = () => {
  return (
    <section className="banner-area banner-style-two position-relative">
      <div className="banner__background-wrap">
        <div
          className="background"
          style={{ backgroundImage: "url(/assets/img/bg/collection-grid.png" }}
        ></div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div
              className="banner__content-two"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
              <img
                className="top-left"
                src="/assets/img/objects/ethereum-01.png"
                width="44"
                alt="object"
                style={{top:'-20%',left:'50%'}}
                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
              />

              <img
                className="top-right"
                src="/assets/img/objects/x.png"
                width="24"
                alt="object"
                style={{top:'20%',right:'-20%'}}
                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;"
              />

              <img
                className="left-align"
                src="/assets/img/objects/circle-01.png"
                width="16"
                alt="object"
                style={{top:'16%',left:'-16%'}}
                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;"
              />

              <img
                className="bottom-left"
                src="/assets/img/objects/bitcoin-01.png"
                width="44"
                alt="object"
                style={{bottom:'-16%',left:'16%'}}
                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
              />

              <img
                className="bottom-right"
                src="/assets/img/objects/circle-03.png"
                width="24"
                alt="object"
                style={{bottom:'-16%',right:'16%'}}
                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
              />

              <h2 className="title">Buy & Sell Nerko's Collection</h2>
              <p className="desc">
                Invest and manage all your NFTs at one place.
              </p>
              <a
                href="#"
                data-target="#collection"
                className="banner__btn btn gradient-btn gradient-btn-2 scroll-to-target"
              >
                <span>Browse collection</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAreaTwo

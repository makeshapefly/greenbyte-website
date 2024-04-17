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
                  src="/assets/img/objects/ethereum-01.png"
                  width="44"
                  alt="object"
                  style={{ top: "-25%", left: "38%" }}
                  ref={animate_2}
                />

                <img
                  src="/assets/img/objects/circle-01.png"
                  width="16"
                  alt="object"
                  style={{ top: "14%", left: "-12%" }}
                  ref={animate_3}
                />

                <img
                  src="/assets/img/objects/circle-03.png"
                  width="24"
                  alt="object"
                  style={{ bottom: "-16%", left: "12%" }}
                  ref={animate_4}
                />

                <h2 className="title">Supercharge your NFT Adventure</h2>
                <p className="desc">
                  Find the right NFT collections to buy within the platform.
                </p>
                <a
                  href="https://opensea.io/"
                  target="_blank"
                  className="banner__btn btn gradient-btn"
                >
                  <span>View in OPENSEA</span>{" "}
                  <i className="unicon-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner__images"
                ref={animate_5}
              >
                <img
                  src="/assets/img/objects/bitcoin-01.png"
                  width="44"
                  className="shape"
                  alt="object"
                  ref={animate_6}
                  style={{ top: "67%", left: "-21%" }}
                />

                <img
                  src="/assets/img/objects/x.png"
                  width="28"
                  className="shape"
                  alt="object"
                  ref={animate_7}
                  style={{ top: "-4%", right: "16%" }}
                />

                <img
                  className="shape dashed-line has-active-light"
                  width="300"
                  src="/assets/img/others/blob-dashed.svg"
                  alt="Blog dashed"
                  style={{
                    top: "-10%",
                    right: "17%",
                    fill: "transparent",
                    opacity: ".1",
                  }}
                />

                <img
                  className="shape dashed-line has-active-dark"
                  width="300"
                  src="/assets/img/others/blob-dashed-light.svg"
                  alt="Blog dashed"
                  style={{
                    top: "-10%",
                    right: "17%",
                    fill: "transparent",
                    opacity: ".1",
                  }}
                />

                <svg
                  style={{ top: "-17%", opacity: ".3" }}
                  className="shape"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#F796FF"
                    d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z"
                    transform="translate(100 100)"
                  />
                </svg>

                <div className="banner__images-grid">
                  <div className="left">
                    <img src="/assets/img/artwork/05.jpg" alt="artwork" />
                  </div>
                  <div className="right">
                    <img src="/assets/img/artwork/13.jpg" alt="artwork" />
                  </div>
                </div>

                <a
                  className="tg-circle-text"
                  href="https://opensea.io/"
                  target="_blank"
                >
                  <svg
                    className="tg-circle-text-path tg-animation-spin"
                    viewBox="0 0 100 100"
                    width="120"
                    height="120"
                  >
                    <defs>
                      <path
                        id="circle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text fontSize="11.75">
                      <textPath xlinkHref="#circle">
                        view in opensea • view in opensea •
                      </textPath>
                    </text>
                  </svg>
                  <i className="unicon-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroArea

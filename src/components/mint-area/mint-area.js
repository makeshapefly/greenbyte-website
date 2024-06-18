import React, { useEffect, useRef } from "react";
import anime from 'animejs/lib/anime.es.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollVertical, faHouseChimneyCrack, faHandshakeAngle, faSterlingSign } from '@fortawesome/free-solid-svg-icons'

function SingleMintItem({ icon, title, subtitle }) {
  return (
    <div className="col-md-6 col-sm-9">
      <div className="mint__item">
        <div className="mint__icon">
          <img src={`/assets/img/icons/mint-${icon}.png`} alt="icon" />
        </div>
        <div className="mint__content">
          <h3 className="title">{title}</h3>
          <p className="desc">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

const MintArea = () => {
  const animate_3 = React.useRef(null);
  React.useEffect(() => {
    animate_3.current = anime({
      targets: ".el",
      opacity: [0, 1], translateY: [24, 0],
      delay: anime.stagger(100),
      loop: false,
    });
  }, []);

  return (
    <section id="minting" className="mint-area section-pt-80 section-pb-50">
      <div className="container">
        <div
          className="row justify-content-center"
          // ref={animate_1}
          // style={{ opacity: "0" }}
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">What you get</h2>
            </div>
          </div>
        </div>
        <div
          className="mint__lits-wrapper"
          // ref={animate_2}
          // style={{ opacity: "0" }}
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
        >
          <div
            className="row justify-content-center el"
            ref={animate_3}
            // style={{ opacity: "0" }}
            data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);"
          >
            <div className="col-md-6 col-sm-9">
              <div className="mint__item">
                <div className="mint__icon">
                  <FontAwesomeIcon icon={faSquarePollVertical} size='3x' color="blue" />
                </div>
                <div className="mint__content">
                  <h3 className="title">Smart Meter Data</h3>
                  <p className="desc">Take back control of your smart meter data and glean usage insights.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-9">
              <div className="mint__item">
                <div className="mint__icon">
                  <FontAwesomeIcon icon={faHouseChimneyCrack} size='3x' color="blue" />
                </div>
                <div className="mint__content">
                  <h3 className="title">Retrofit</h3>
                  <p className="desc">All your assessment data, EPC ratings, PAS-2035 content all in one place.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-9">
              <div className="mint__item">
                <div className="mint__icon">
                <FontAwesomeIcon icon={faHandshakeAngle} size='3x' color="blue" />
                </div>
                <div className="mint__content">
                  <h3 className="title">Advice</h3>
                  <p className="desc">Energy advice and links to community energy groups.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-9">
              <div className="mint__item">
                <div className="mint__icon">
                <FontAwesomeIcon icon={faSterlingSign} size='3x' color="blue" />
                </div>
                <div className="mint__content">
                  <h3 className="title">Grants</h3>
                  <p className="desc">Connect with financial assistance in your area.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MintArea

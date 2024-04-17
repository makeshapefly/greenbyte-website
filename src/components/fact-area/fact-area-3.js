import React from "react";

// single fact item
function SingleFactItem({ count, meta }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="fact__item text-center">
        <h2 className="fact__count">{count}</h2>
        <span className="meta">{meta}</span>
      </div>
    </div>
  )
}

const FactAreaThree = () => {
  return (
    <section className="fact-area fact-style-three section-pt-60 section-pb-30">
      <div className="container">
        <div className="fact__items-wrap position-relative">
          <img
            className="shape"
            src="/assets/img/objects/bitcoin-01.png"
            width="32"
            alt="Object"
            style={{ bottom: "-32%", left: "30%" }}
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;"
          />

          <img
            className="shape"
            src="/assets/img/objects/ethereum-01.png"
            width="24"
            alt="Object"
            style={{ top: "-25%", right: "25%" }}
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;"
          />

          <div
            className="row justify-content-center"
            data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);"
          >
            <SingleFactItem count="400k+" meta="Wallets Connected" />
            <SingleFactItem count="20k+" meta="Collections dropped." />
            <SingleFactItem count="230+" meta="Creative artists" />
            <SingleFactItem count="2.5x" meta="Estimated value" />

          </div>
        </div>
      </div>
    </section>
  )
}

export default FactAreaThree

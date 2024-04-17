import React from "react"

// single fact item
function SingleFactItem({ icon, count, meta }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="fact__item text-center">
        <i className={`${icon} tg-text-gradient`}></i>
        <h2 className="fact__count">{count}</h2>
        <span className="meta">{meta}</span>
      </div>
    </div>
  )
}

const FactAreaTwo = () => {
  return (
    <section className="fact-area fact-style-two section-pt-60 section-pb-30">
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
            <SingleFactItem
              icon="unicon-sub-volume"
              count="400+"
              meta="Collections"
            />
            <SingleFactItem
              icon="unicon-user-avatar"
              count="200+"
              meta="Artists"
            />
            <SingleFactItem
              icon="unicon-theater"
              count="1860+"
              meta="Community members"
            />
            <SingleFactItem
              icon="unicon-rocket"
              count="2.5x"
              meta="Estimated value"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FactAreaTwo

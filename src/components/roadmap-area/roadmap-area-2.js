import React from "react"

// road map card
function SingleRoadMapCard({
  percent,
  step,
  title,
  desc = "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
}) {
  return (
    <div className="roadmap__card style-two">
      <div className="roadmap__percent">
        <span>{percent}</span>%
      </div>
      <div className="roadmap__step">
        <span className="tg-text-gradient d-inline-flex">Phase {step}</span>
      </div>
      <h3 className="roadmap__heading">{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

const RoadMapAreaTwo = () => {
  return (
    <section
      id="roadmap"
      className="roadmap-area roadmap-style-two section-pt-70 section-pb-80"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">Nerko's Roadmap</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-10">
            <div className="roadmap__wrapper-two">
              <SingleRoadMapCard percent="0" step="01" title="Planning" />
              <SingleRoadMapCard percent="25" step="02" title="Production" />
              <SingleRoadMapCard percent="50" step="03" title="Launch" />
              <SingleRoadMapCard percent="75" step="04" title="Minting" />
              <SingleRoadMapCard percent="95" step="05" title="New Nfts" />
              <SingleRoadMapCard percent="100" step="06" title="Metaverse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMapAreaTwo

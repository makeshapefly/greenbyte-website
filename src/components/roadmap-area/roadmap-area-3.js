import React from "react"

// road map data
const road_map_data = [
  {
    step: 1,
    percent: 0,
    heading: "Planning",
    desc: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
  {
    step: 2,
    percent: 25,
    heading: "Production",
    desc: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
  {
    step: 3,
    percent: 50,
    heading: "Launch",
    desc: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
  {
    step: 4,
    percent: 75,
    heading: "Minting",
    desc: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
  {
    step: 5,
    percent: 95,
    heading: "New Nfts",
    desc: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
  {
    step: 6,
    percent: 100,
    heading: "Metaverse",
    desc: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
]

const RoadMapAreaThree = () => {
  return (
    <section
      id="roadmap"
      className="roadmap-area roadmap-style-three section-pt-70 section-pb-30"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">
                Nerko's <span className="tg-text-gradient">Roadmap</span>
              </h2>
            </div>
          </div>
        </div>
        <div
          className="roadmap__wrapper-three"
          data-anime="targets: > * > * > *; opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: anime.stagger(100);"
        >
          <div className="row justify-content-center">
            {road_map_data.map(item => (
            <div key={item.step} className="col-lg-4 col-md-6 col-sm-9">
              <div className="roadmap__card style-three">
                <div className="roadmap__percent">
                  <span>{item.percent}</span>%
                </div>
                <div className="roadmap__step">
                  <span className="tg-text-gradient d-inline-flex">
                    Phase {item.step < 10 ? `0${item.step}` : item.step}
                  </span>
                </div>
                <h3 className="roadmap__heading">{item.heading}</h3>
                <p>
                  {item.desc}
                </p>
                <ul className="roadmap__lists list-wrap">
                  {item.lists.map((l,i) => (
                  <li key={i}>
                    <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>
                    {l}
                  </li>
                  ))}
                </ul>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMapAreaThree

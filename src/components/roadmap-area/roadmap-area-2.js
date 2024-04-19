import React from "react"

// road map card
function SingleRoadMapCard({
  icon,
  step,
  title,
  desc = "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
}) {
  return (
    <div className="roadmap__card style-two">
      <div className="roadmap__percent">
        <div className="roadmap__icon"> {icon}</div>
      </div>
      <h3 className="roadmap__heading">{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

const RoadMapAreaTwo = () => {
  return (
    <section
      id="netZero"
      className="roadmap-area roadmap-style-two section-pt-70 section-pb-80"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">NetZero Pathway</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-10">
            <div className="roadmap__wrapper-two">
              <SingleRoadMapCard icon={<img src="/icons/analysis.png"/>} step="01" title="Calculate" desc="This phase involves the initial assessment and computation of relevant data to establish a baseline for the net-zero pathway." />
              <SingleRoadMapCard icon={<img src="/icons/goals.png"/>} step="02" title="Set Targets" desc="specific goals and targets are defined based on the calculated data, providing a clear direction for the journey towards net-zero emissions."/>
              <SingleRoadMapCard icon={<img src="/icons/analysis.png"/>} step="03" title="Reduce" desc="This phase focuses on implementing strategies and initiatives to reduce carbon emissions and overall environmental impact."/>
              <SingleRoadMapCard icon={<img src="/icons/analysis.png"/>} step="04" title="Offset" desc="After implementing reduction strategies, assess any remaining unavoidable emissions.Invest in high-quality carbon offset programs that remove greenhouse gases from the atmosphere (e.g., certified tree planting projects, carbon capture technologies). Focus should remain on prioritizing reductions over offsets."/>
              <SingleRoadMapCard icon={<img src="/icons/analysis.png"/>} step="05" title="Innovation and Collaboration" desc="This phase emphasizes the importance of innovation and collaboration in finding sustainable solutions and engaging stakeholders to drive positive change." />
              <SingleRoadMapCard icon={<img src="/icons/analysis.png"/>} step="06" title="Transparency and Communication" desc="Crucial for sharing progress, challenges, and successes of the net-zero pathway with stakeholders, fostering trust and accountability in the process."/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMapAreaTwo

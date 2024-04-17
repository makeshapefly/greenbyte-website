import React from "react"
// internal
import team_data from "../../data/team-data"
import SingleTeam from "./single-team"

const TeamAreaThree = () => {
  return (
    <section
      id="team"
      className="team-area team-style-three section-pt-70 section-pb-30"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">
                Meet <span className="tg-text-gradient">the artists</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="team__inner-wrap">
          <div className="row justify-content-center">
            {team_data.slice(0, 4).map(item => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-6">
                <SingleTeam key={item.id} item={item} style_2={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamAreaThree

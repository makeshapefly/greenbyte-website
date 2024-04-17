import React from "react";
import team_data from "../../data/team-data";
import SingleTeam from "./single-team";

const TeamArea = () => {
  return (
    <section className="team-area section-py-80">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">Meet the artists</h2>
            </div>
          </div>
        </div>
        <div
          className="team__grid-wrapper"
          data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -400; delay: anime.stagger(100);"
        >
          {team_data.slice(0,5).map((item) => (
            <SingleTeam key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamArea

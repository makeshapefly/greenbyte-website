import React from "react";
import team_data from "../../data/team-data";
import SingleTeam from "./single-team";

const TeamAreaTwo = () => {
  return (
    <section id="team" className="team-area section-pt-70">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">Nerko's Crew</h2>
            </div>
          </div>
        </div>
        <div className="team__inner-wrap">
          <div
            className="team__inner-bg"
            style={{ backgroundImage: "url(/assets/img/bg/map.svg" }}
          ></div>
          <div className="row justify-content-center">
            {team_data.map(item => (
              <div key={item.id} className="col-md-4 col-sm-6 col-6">
                <SingleTeam item={item} style_2={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamAreaTwo

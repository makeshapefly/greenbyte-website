import React from "react"

// single chose item
function SingleChoseItem({ icon, title, desc }) {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="choose__item">
        <div className="choose__item-count tg-text-gradient">
          <i className={icon}></i>
        </div>
        <div className="choose__item-content">
          <h3 className="title">{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

const ChoseAreaTwo = () => {
  return (
    <section
      id="choose"
      className="choose-area choose-style-two section-pt-70 section-pb-80"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h1 className="section__title tg-text-gradient">WHY WORK WITH US?</h1>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div
            className="row choose__item-lists"
            data-anime="targets: > * > *; opacity:[0, 1]; translateY:[48, 0]; onview: -400; delay: anime.stagger(100);"
          >
            <SingleChoseItem
              icon="unicon-chart-line-data"
              title={
                <>
                  Data-Driven <br /> Solutions
                </>
              }
              desc="Our data engineers translate complex environmental issues into clear insights, guiding impactful initiatives for a sustainable future."
            />
            <SingleChoseItem
              icon="unicon-checkmark-outline"
              title={
                <>
                  Accessible Technology for Change
                </>
              }
              desc="We create user-friendly tech so everyone can take part in building a sustainable future through accessible tools."
            />
            <SingleChoseItem
              icon="unicon-collaborate"
              title={
                <>
                  Collaborative Community Engagement
                </>
              }
              desc="We partner with communities, not just offer solutions. Together, we build a sustainable future through collaboration and empowered local voices."
            />
            <SingleChoseItem
              icon="unicon-building"
              title={
                <>
                  Building for Today and Tomorrow
                </>
              }
              desc="We combine expertise with action, developing real-world solutions that tackle climate change today. Partner with us to make a tangible difference."
            />
          </div>
          <img
            src="/assets/img/objects/circle.png"
            className="top-left"
            width="16"
            alt="Object"
            style={{ top: "-16%", left: "8%" }}
          />
          <img
            src="/assets/img/objects/circle-03.png"
            className="bottom-right"
            width="24"
            alt="Object"
            style={{ bottom: "16%", right: "-8%" }}
          />
          <img
            src="/assets/img/objects/x.png"
            className="bottom-left"
            width="28"
            alt="Object"
            style={{ bottom: "16%", left: "-8%" }}
          />
        </div>
      </div>
    </section>
  )
}

export default ChoseAreaTwo

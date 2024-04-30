import React from "react"

// about box
function AboutBox({ about_img, sub_title, title, content_1, content_2 }) {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div
          className="about__img"
          data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
        >
          <img src={`/assets/img/others/${about_img}`} alt="img" />
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="about__content"
          data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
        >
          <div className="section__title text-start">
            <span className="sub-title tg-text-gradient">{sub_title}.</span>
            <h2 className="title">{title}</h2>
          </div>
          <p>{content_1}</p>
          <p>{content_2}</p>
          <div className="about__content-text-btn">
            <a href="#">
              <span>Learn more</span>
              <i className="unicon-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutAreaTwo = () => {
  return (
    <section
      id="people-data"
      className="about-area about-style-two section-pt-70 section-pb-80"
      style={{marginTop:120}}
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">
                People + Data <span className="tg-text-gradient">+ Technology</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="about__row-reverse">
          <AboutBox
            about_img="l2-hero-image.png"
            title="Arming communities with data and platforms.."
            content_1="..can lean to wondrous outcomes."
            content_2="Smart decision making, a focus on measurable impact and the erosion of our carbon footprints."
          />
        </div>
      </div>
    </section>
  )
}

export default AboutAreaTwo

import React, { useRef, useEffect } from "react"
import video from '../../../public/assets/img/retrofit/shutterstock_1096048299.mp4'

// about box
function AboutBox({ about_img, sub_title, title, content_1, content_2 }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const { current: videoElement } = videoRef
    videoElement.setAttribute('muted', '')
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <div className="row align-items-center">
      <div className="col-lg-7">
        <div
          className="about__img"
          data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
        >
          <video src={video} autoPlay ref={videoRef} muted style={{
            width: '100%',
            height: '100%',
            opacity: '1.0',
          }} />
        </div>
      </div>
      <div className="col-lg-5">
        <div
          className="about__content"
          data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
        >
          <div className="section__title text-start">
            <span className="sub-title tg-text-gradient">{sub_title}</span>
            <h2>{title}</h2>
          </div>
          <p>{content_1}</p>
          <p>{content_2}</p>
          <div className="about__content-text-btn" style={{marginTop: 10}}>
            <a href="/dashbold">
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
    <div className="container" style={{maxWidth: '100%', borderBottom: '1px solid'}}>
      <div
        className="row justify-content-center"
        data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
      >
      </div>
      <div className="about__row-reverse">
        <AboutBox
          about_img="l2-hero-image.png"
          title="Arming households and communities with the data needed.."
          content_1=".. to make smart decisions about your home."
          content_2="Saving money and the environment."
        />
      </div>
    </div>
  )
}

export default AboutAreaTwo

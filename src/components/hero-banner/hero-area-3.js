import React, { useRef, useEffect } from "react";
import video from '../../../public/assets/img/retrofit/shutterstock_1096048299.mp4'

const HeroAreaThree = () => {
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
    <section className="banner-area banner-style-three position-relative">
      <div className="banner__background-wrap">

      </div>
      <div className="banner__three-inner">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div
                className="banner__content"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
              >
                <h2 className="title">Net Zero Heroes</h2>
                <p className="desc">
                  We work with communities, councils, Government and the private sector to provide data and platforms for Net Zero initiatives
                </p>
                <a
                  href="#people-data"
                  className="banner__btn btn gradient-btn gradient-btn-2 scroll-to-target"
                >
                  <span>People + Data + Technology</span>
                  <i className="unicon-arrow-up-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div >
                <video src={video} autoPlay ref={videoRef} muted style={{
                  width: '210%',
                  height: '210%',
                  opacity: '0.2',
                  marginLeft: '-200px'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAreaThree

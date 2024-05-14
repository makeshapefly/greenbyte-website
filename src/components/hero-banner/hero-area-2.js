import React, { useRef, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import video from '../../../public/assets/img/retrofit/shutterstock_1096048299.mp4'

const HeroAreaTwo = () => {
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

  function SingleChoseItem({ id, title, desc, img }) {
    return (
      <div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-sm-4 col-xs-4">
            <div>
              <a href="https://climateemergency.uk/wp-content/uploads/2024/03/Scorecards_Successes_report_CEUK_DIGITAL.pdf" target="_blank">
                <img src="/assets/img/retrofit/report-image-edited.jpg" style={{ width: '80%', opacity: '1.0', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
              </a>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-sm-8 col-xs-8">
            <div>
              <h3 className="title">{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className="banner-area banner-style-two" style={{ alignItems: 'start', minHeight: '95vh', paddingBottom: 0 }}>
        <div className="banner__background-wrap" style={{ minHeight: '10vh' }}>
          <div
          //style={{ backgroundImage: "url(/assets/img/retrofit/streetscape.jpg)", opacity: 0.1 }}
          >
            <div className="container" style={{ maxWidth: '2000px' }}>
              <div className="row">
                <div className="col-xl-12 col-lg-12 d-none d-lg-block">
                  <div >
                    <video src={video} autoPlay ref={videoRef} muted style={{
                      width: '100%',
                      height: '100%',
                      opacity: '0.2',
                      marginTop: '100px'
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <h2 className="title" style={{ fontSize: 64, lineHeight: 1, marginTop: '12%' }}><a href="#netZero">Net Zero</a> <span className="tg-text-gradient">Heroes</span></h2>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12" style={{ fontSize: 24, color: '#000' }}>
                    <p style={{ fontSize: 24, marginBottom: 20, color: '#000' }}>We work with communities, councils, Government and the private sector to provide data and platforms for Net Zero initiatives</p>
                    <a
                      href="#people-data"
                      className="banner__btn btn gradient-btn gradient-btn-2 scroll-to-target"
                    >
                      <span>People + Data + Technology</span>
                      <i className="unicon-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>

  )
}

export default HeroAreaTwo

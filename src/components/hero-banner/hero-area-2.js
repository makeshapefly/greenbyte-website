import React, { useRef, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import video from '../../../public/assets/img/retrofit/shutterstock_1096048299.mp4'
import video2 from '../../../public/assets/img/retrofit/1068696866-preview.mp4'

const HeroAreaTwo = () => {
  const videoRef = useRef(null)
  const videoRef2 = useRef(null)

  useEffect(() => {
    const { current: videoElement } = videoRef
    videoElement.setAttribute('muted', '')

    const { current: videoElement2 } = videoRef2
    videoElement.setAttribute('muted', '')
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    //autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <div>
      <section className="banner-area banner-style-two" style={{ alignItems: 'start' }}>
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
            <div className="col-xl-6 col-lg-6">
              <h2 className="title" style={{ fontSize: 64, lineHeight: 1, marginTop: '20%' }}><a href="#netZero">Net Zero</a> <span className="tg-text-gradient">Heroes</span></h2>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12" style={{ fontSize: 24, color: '#000' }}>
                    <p style={{ fontSize: 24, marginBottom: 10, color: '#000' }}>Communities in partnership with councils, Government and the private sector.</p>
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
            <div className="col-xl-6 col-lg-6">
              <div className="row ml-auto p-2" style={{ marginTop: '20%', padding: '100px' }}>
                <Slider {...settings}>
                  <div style={{ fontSize: 24, color: '#000' }}>
                    <a href="https://climateemergency.uk/wp-content/uploads/2024/03/Scorecards_Successes_report_CEUK_DIGITAL.pdf" target="_blank">
                      <img src="/assets/img/retrofit/report-image-edited.jpg" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '75%' }} />
                    </a>
                  </div>

                  <div>
                  </div>
                  <div></div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroAreaTwo

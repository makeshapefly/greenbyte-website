import React, { useRef, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import video from '../../../public/assets/img/retrofit/1096048299-preview.mp4'
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div>
      <section className="banner-area banner-style-two">
        <div className="banner__background-wrap" style={{ minHeight: '102vh' }}>
          <div
            className="background"
          //style={{ backgroundImage: "url(/assets/img/retrofit/streetscape.jpg)", opacity: 0.1 }}
          >
            <div className="container" style={{maxWidth: '100%'}}>
              <div className="row">
                <div className="col-xl-12 col-lg-12 d-none d-lg-block">
                  <div>
                    <video src={video} autoPlay ref={videoRef} muted style={{
                      width: '100%',
                      height: '100%',
                      opacity: '1.0'
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
              <h2 className="title" style={{ fontSize: 64, lineHeight: 1 }}><a href="#netZero">Net Zero</a> <span className="tg-text-gradient">Heroes</span></h2>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12" style={{ fontSize: 24, color: '#000', marginTop: 10 }}>
                    <p style={{ fontSize: 24, marginBottom: 10, color: '#000' }}>Supporting the real heroes fighting climate change with the data and technology to make a difference.</p>
                    <a
                      href="https://opensea.io/"
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
              <Slider {...settings}>
                <div>
                  <video src={video2} autoPlay loop ref={videoRef2} muted style={{
                    width: '100%',
                    //height: '100%',
                  }} />
                  <div>Learn how people + data + technology =</div>
                </div>

                <div>
                </div>
                <div></div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div>
                kpokpppo
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroAreaTwo

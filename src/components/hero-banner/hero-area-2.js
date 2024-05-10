import React, { useRef, useEffect } from "react"
import video from '../../../public/assets/img/retrofit/37577-414754938.mp4'

const HeroAreaTwo = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const { current: videoElement } = videoRef
    videoElement.setAttribute('muted', '')
  }, [])

  return (
    <section className="banner-area banner-style-two position-relative" style={{ minHeight: '120vh', alignItems: 'start', background: '#c2f2ff' }}>
      <div className="row justify-content-center">
        <div className="col-lg-12 d-none d-lg-block">
        <div className="banner__background-wrap" style={{ minHeight: '102vh', marginTop: '20%', zIndex: 1000 }}>
          <div
            className="background"
            //style={{ backgroundImage: "url(/assets/img/retrofit/streetscape.jpg)", opacity: 1.0 }}
            style={{ opacity: 0.75 }}
          >
            <video src={video} autoPlay loop ref={videoRef} muted />
          </div>
        </div>
      </div>
      </div>

      <div className="container">
        <div>
          <div
            className="banner__images-two"
          >
            {/*<img
              className="shape-two"
              width="64"
              src="/assets/img/objects/wind-turbine-6.svg"
              alt="object"
              style={{ top: '50%', left: '90%' }}
              data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
  />*/}
            {/*<img
              className="shape-five"
              width="64"
              src="/assets/img/objects/wind-turbine-6.svg"
              alt="object"
              style={{ top: '-80px', left: '70%' }}
              data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
  />*/}
          </div>
        </div>
        <div className="row justify-content-center" style={{ marginTop: '8%' }}>
          <div className="col-xl-7 col-lg-9">

            <div
              className="banner__content-two"
            >
            </div>

            <h2 className="title" style={{ fontSize: 64, lineHeight: 1, zIndex: 3000}}><a href="#netZero">Net Zero</a> <span className="tg-text-gradient">Heroes</span></h2>
            <div className="container" style={{zIndex: 1001}}>
              <div className="row">
                <div className="col-lg-12" style={{ fontSize: 24, color: '#000', marginTop: 10 }}>
                  <p style={{ fontSize: 24, marginBottom: 10 }}>Supporting the real heroes fighting climate change with the data and technology to make a difference.</p>
                  people <img src="/assets/img/retrofit/icons8-sum-50.png" />
                  data <img src="/assets/img/retrofit/icons8-sum-50.png" />
                  technology
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <a
                  href="#people-data"
                >
                  <img src="/assets/img/retrofit/circled-equals-svgrepo-com.svg" />

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAreaTwo

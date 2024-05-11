import React, { useRef, useEffect } from "react"
import video from '../../../public/assets/img/retrofit/1068696866-preview.mp4'

const HeroAreaTwo = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const { current: videoElement } = videoRef
    videoElement.setAttribute('muted', '')
  }, [])

  return (
    <section className="banner-area banner-style-two" style={{ background: '#FFF' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <video src={video} autoPlay loop ref={videoRef} muted style={{
              width: '100%',
              height: '100%',
            }} />
          </div>
          <div className="col-xl-6 col-lg-6">
            <h2 className="title" style={{ fontSize: 64, lineHeight: 1 }}><a href="#netZero">Net Zero</a> <span className="tg-text-gradient">Heroes</span></h2>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12" style={{ fontSize: 24, color: '#000', marginTop: 10 }}>
                  <p style={{ fontSize: 24, marginBottom: 10, color: '#000' }}>Supporting the real heroes fighting climate change with the data and technology to make a difference.</p>
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

import React from "react"
//import video from '../../../public/assets/img/retrofit/streetscape.mp4'

const HeroAreaTwo = () => {
  return (
    <section className="banner-area banner-style-two position-relative" style={{ minHeight: '90vh' }}>
      <div className="banner__background-wrap" style={{ minHeight: '102vh' }}>
        <div
          className="background"
          style={{ backgroundImage: "url(/assets/img/retrofit/streetscape.jpg)", opacity: 0.1 }}
        >
         {/*<video src={video} autoPlay /> */}
        </div>
      </div>
      <div className="container">
        <div>
          <div
            className="banner__images-two"
          >
            <img
              className="shape-two"
              width="64"
              src="/assets/img/objects/wind-turbine-6.svg"
              alt="object"
              style={{ top: '-50px', left: '90%' }}
              data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
            />
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
        <div className="row justify-content-center" style={{marginTop: 40}}>
          <div className="col-xl-7 col-lg-9">

            <div
              className="banner__content-two"
            >
            </div>

            <h2 className="title" style={{ fontSize: 64, lineHeight: 1}}>Net Zero <span className="tg-text-gradient">Heroes</span></h2>
            <div className="container">
              <div className="row">
                <div className="col-lg-12" style={{ fontSize: 24, color: '#000', marginTop: 10 }}>
                  <p style={{fontSize: 24, marginBottom: 10}}>Supporting the real heroes fighting climate change with the data and technology to make a difference</p>
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

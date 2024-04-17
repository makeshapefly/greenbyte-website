import React from "react"

const CtaAreaTwo = () => {
  return (
    <section className="cta-area style-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="cta__content style-two text-center">
              <img
                src="/assets/img/objects/circle-01.png"
                width="24"
                alt="Object"
                style={{top:"0%",left:"-16%"}}
                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
              />

              <img
                src="/assets/img/objects/x.png"
                width="24"
                alt="Object"
                style={{bottom:"16%",right:"-8%"}}
                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;"
              />

              <img
                src="/assets/img/objects/ethereum-02.png"
                width="40"
                alt="Object"
                style={{top:"0%",right:"-16%"}}
                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
              />

              <img
                src="/assets/img/objects/bitcoin-01.png"
                width="48"
                alt="Object"
                style={{bottom:"16%",left:"-8%"}}
                data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
              />

              <h2 className="title">We make it easy to Discover</h2>
              <p>Invest and manage all your NFTs at one place.</p>
              <a href="#" className="btn gradient-btn">
                Join community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaAreaTwo

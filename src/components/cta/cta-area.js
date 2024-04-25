import React from "react"

const CtaArea = () => {
  return (
    <section id="contact" className="cta-area">
      <div
        className="cta-bg"
        style={{ backgroundImage: "url(/assets/img/bg/contact.png)" }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="cta__content text-center">
            <img
                src="assets/img/objects/circle.png"
                width="24"
                alt="Object"
                style={{top:'0%',left:'-16%'}}
              />
              <img
                src="assets/img/objects/x.png"
                width="24"
                alt="Object"
                style={{bottom:'16%',right:'-8%'}}
              />
              <h3 className="title">Let's Connect</h3>
              <h4>Get in touch to discuss how we can collaborate on your digital journey.</h4>
              <a href="#" className="btn gradient-btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaArea

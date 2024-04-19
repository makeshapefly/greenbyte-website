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
              <h3 className="title">Let's Connect</h3>
              <h4>Get in touch to discuss how we can collaborate on your digital journey.</h4>
              <a href="mailto:london@appnetwise.com" className="btn gradient-btn">
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

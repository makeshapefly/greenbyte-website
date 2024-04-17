import { Link } from "gatsby"
import React from "react"
import { animateScroll as scroll } from "react-scroll"

// handle scroll to top
const handleScrollToTop = () => {
  scroll.scrollToTop()
}

const FooterThree = () => {
  return (
    <footer className="footer-area footer-style-default">
      <div className="footer__top-wrapper">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="logo footer-logo">
                  <Link to="/" className="light-logo">
                    <img src="/assets/img/logo/nerko-light.svg" alt="Nerko" />
                  </Link>
                  <Link to="/" className="dark-logo">
                    <img src="/assets/img/logo/nerko-dark.svg" alt="Nerko" />
                  </Link>
                </div>
                <div className="footer__info-content">
                  <p>
                    Join our Discord channel or follow us on Twitter keep up to
                    date with our latest work and announcements.
                  </p>
                  <div className="footer__info-social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-discord"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6"></div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget">
                <h4 className="fw-title">Quick Link</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Collection</a>
                  </li>
                  <li>
                    <a href="#">Roadmap</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4 className="fw-title">Community</h4>
                <ul>
                  <li>
                    <a href="#">How it works!</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Get in touch</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__wrapper-default">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copyright__text">
                <p>
                  &copy; {new Date().getFullYear()} Nerko. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="copyright__menu">
                <ul className="list-wrap">
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                  <li className="backTop">
                    <button
                      onClick={handleScrollToTop}
                      style={{ background: "transparent", border: "none" }}
                      className="scroll-to-target"
                      data-target="html"
                    >
                      <i className="flaticon-arrowhead-up"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterThree

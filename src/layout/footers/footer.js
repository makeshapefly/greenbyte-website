import { Link } from "gatsby";
import React from "react";
import { animateScroll as scroll } from 'react-scroll';

// handle scroll to top
const handleScrollToTop = () => {
  scroll.scrollToTop();
}

const Footer = () => {
  return (
    <footer className="footer-area section-py-80">
      <div className="container">
        <div className="footer__wrapper">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
              <div className="footer__info text-center">
                <div className="footer-logo">
                  <Link to="/">
                    <img
                      src="/assets/img/logo/GreenByte.svg"
                      width="200"
                      alt="GreenByte"
                    />
                  </Link>
                </div>
                <p>
                The fusion of people, data, and technology results in beneficial outcomes for the planet.
                </p>
                <ul className="list-wrap footer__social">
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright__wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright__text">
                  <p>&copy; {new Date().getFullYear()} GreenByte. All rights reserved.</p>
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
      </div>
    </footer>
  )
}

export default Footer

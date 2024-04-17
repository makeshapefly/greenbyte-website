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
          <img
            src="/assets/img/objects/ethereum-01.png"
            width="32"
            alt="object"
            style={{ top: '32%', left: '16%' }}
          />
          <img
            src="/assets/img/objects/x.png"
            width="16"
            alt="object"
            style={{ top: '8%', right: '16%' }}
          />
          <img
            src="/assets/img/objects/circle-01.png"
            width="16"
            alt="object"
            style={{ bottom: '24%', right: '40%' }}
          />
          <img
            src="/assets/img/objects/circle-03.png"
            width="24"
            alt="object"
            style={{ bottom: '-8%', left: '30%' }}
          />
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
              <div className="footer__info text-center">
                <div className="footer-logo">
                  <Link to="/">
                    <img
                      src="/assets/img/logo/nerko.svg"
                      width="200"
                      alt="Nerko"
                    />
                  </Link>
                </div>
                <p>
                  We make it easy to Discover, Invest and manage all your NFTs
                  at one place.
                </p>
                <ul className="list-wrap footer__social">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-discord"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-telegram-plane"></i>
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
                  <p>&copy; {new Date().getFullYear()} Nerko. All rights reserved.</p>
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

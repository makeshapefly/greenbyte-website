import React from 'react';

const FooterTwo = () => {
  return (
    <footer className="footer-area footer-style-two section-py-80">
      <div className="footer-bg" style={{ backgroundImage: "url(/assets/img/bg/footer-bg.png" }}></div>
      <div className="container">
        <div className="footer__wrapper">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
              <div className="footer__info text-center">
                <ul className="list-wrap footer__social">
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-discord"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                  <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright__wrapper-two">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="copyright__menu">
                  <ul className="list-wrap justify-content-center">
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Terms of use</a></li>
                  </ul>
                </div>
                <div className="copyright__text text-center">
                  <p>&copy; {new Date().getFullYear()} Nerko. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
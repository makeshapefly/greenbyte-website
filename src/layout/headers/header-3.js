import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { window } from "browser-monads";
import { Link as SinglePageLink } from "react-scroll";
import { useLocation } from '@reach/router';
// internal
import OffCanvas from '../../components/common/off-canvas';
import useSticky from '../../hooks/use-sticky';
import ConnectModal from "../../components/common/modals/connect-modal";
import { menu_data_3 } from '../../data/menu_data';

const HeaderThree = () => {
  const { sticky } = useSticky();
  // is sidebar open
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // pathname
  let { pathname } = useLocation();

  let parentClass = "";
  if (pathname.startsWith("/blog") || pathname.startsWith("/blog-details")) {
    parentClass = "active";
  }
  // use effect
  useEffect(() => {
    if (isSidebarOpen) {
      window.document.body.classList.add("mobile-menu-visible")
    }
    else {
      window.document.body.classList.remove("mobile-menu-visible")
    }
  }, [isSidebarOpen])

  // handleClick
  const handleClick = () => {
    setIsSidebarOpen(true)
  }

  return (
    <header className="header-style-three">
      <div id="sticky-header" className={`tg-header__area transparent-header ${sticky ? "sticky-menu" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div onClick={handleClick} className="mobile-nav-toggler">
                <i className="flaticon-menu-1"></i>
              </div>
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <Link to="/" className="light-logo">
                      <img src="/assets/img/logo/nerko-light.svg" alt="Nerko" />
                    </Link>
                    <Link to="/" className="dark-logo">
                      <img src="/assets/img/logo/nerko-dark.svg" alt="Nerko" />
                    </Link>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      {menu_data_3.map((menu, i) =>
                        <React.Fragment key={i}>
                          {menu.hasDropdown ? (
                            <li className="menu-item-has-children">
                              {menu.title !== "Blog" && (
                                <SinglePageLink
                                  activeClass="active"
                                  to={menu.link}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                  className="section-link"
                                >
                                  {menu.title}
                                </SinglePageLink>
                              )}
                              {menu.title === "Blog" && (
                                <Link
                                  className={`${parentClass}`}
                                  to={menu.link}
                                >
                                  {menu.title}
                                </Link>
                              )}
                              <ul className="sub-menu">
                                {menu.submenus.map((sub, i) => (
                                  <li
                                    key={i}
                                    className={`${pathname === `${sub.link}` ? 'active' : ''}`}
                                  >
                                    <Link to={sub.link}>{sub.title}</Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li>
                              <SinglePageLink
                                activeClass="active"
                                to={menu.link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="section-link"
                              >
                                {menu.title}
                              </SinglePageLink>
                            </li>
                          )}
                        </React.Fragment>
                      )}
                    </ul>
                  </div>
                  <div className="tgmenu__action">
                    <ul className="list-wrap">
                      <li className="header-social">
                        <a href="#" className="d-none d-sm-block"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-discord"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#connectModal"><i className="fas fa-wallet"></i></a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <OffCanvas setIsSidebarOpen={setIsSidebarOpen} data_3={true} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Connect Wallet Modal --> */}
      <ConnectModal />
      {/* <!-- Connect Wallet Modal --> */}
    </header>
  );
};

export default HeaderThree;
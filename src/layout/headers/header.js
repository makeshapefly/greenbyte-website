import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { window } from "browser-monads";
import { Link as SinglePageLink } from "react-scroll";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useLocation } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
// internal
import OffCanvas from "../../components/common/off-canvas";
import useSticky from "../../hooks/use-sticky";
import { menu_data } from "../../data/menu_data";


const Header = ({ page }) => {
  const { sticky } = useSticky()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  let { pathname } = useLocation();

  let parentClass = ""
  if (pathname.startsWith("/carbon-market") || pathname.startsWith("/retrofit")) {
    parentClass = "active"
  }


  useEffect(() => {
    if (isSidebarOpen) {
      window.document.body.classList.add("mobile-menu-visible")
    } else {
      window.document.body.classList.remove("mobile-menu-visible")
    }
  }, [isSidebarOpen])

  // handleClick
  const handleClick = () => {
    setIsSidebarOpen(true)
  }

  return (
    <header>
      <div
        id="sticky-header"
        className={`tg-header__area transparent-header ${sticky ? "sticky-menu" : ""
          }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div onClick={handleClick} className="mobile-nav-toggler" style={{ marginTop: '0px' }}>
                <i className="flaticon-menu-1"></i>
              </div>
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <Link to="/">
                      <img src="/assets/img/logo/gb-logo.svg" alt="GreenByte" />
                    </Link>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      {menu_data.map((menu, i) => (
                        <React.Fragment key={i}>
                          {menu.hasDropdown ? (
                            <li className={`menu-item-has-children`}>
                              {(menu.title !== "Projects") && (
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
                              {(menu.title === "Projects") && (
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
                                    className={`${pathname === `${sub.link}`
                                      ? "active"
                                      : ""
                                      }`}
                                  >
                                    <Link to={sub.link}>{sub.title}</Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (page && menu.title === "Blog") ? (
                            <li className={(pathname.startsWith("/blog"))
                              ? "active"
                              : ""
                            }>
                              <AnchorLink to={`/${menu.link}`} title={menu.title} />
                            </li>
                          ) : (page) ? (
                            <li>
                              <AnchorLink to={`/#${menu.link}`} title={menu.title} />
                            </li>

                          ) : (
                            <li>
                              {menu.title === "Blog" ? (
                                <Link to={`/${menu.link}`} className="section-link">
                                  {menu.title}
                                </Link>
                              ) : (
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
                            </li>

                          )}

                        </React.Fragment>
                      ))}
                    </ul>
                  </div>
                  <div className="tgmenu__action">
                    <ul className="list-wrap">
                      <li className="header-social">
                        {/*} <a href="#" className="d-none d-sm-block">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-discord"></i>
                    </a> */}
                        <Link to="/login">
                          <a
                            href="/"
                            className="d-blcok d-xl-none"
                          >
                            <FontAwesomeIcon icon={faRightToBracket} />
                          </a>
                        </Link>
                      </li>
                      <Link to="/login">
                        <li className="header-btn">
                          <button
                            className="btn border-btn"
                          >
                            Customer Login
                          </button>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <OffCanvas setIsSidebarOpen={setIsSidebarOpen} data_1={true} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { window } from "browser-monads";
import { Link as SinglePageLink } from "react-scroll";
import { useLocation } from "@reach/router";
// internal
import OffCanvas from "../../components/common/off-canvas";
import useSticky from "../../hooks/use-sticky";
import { menu_data_2 } from "../../data/menu_data";

const HeaderTwo = () => {
  const { sticky } = useSticky()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  let { pathname } = useLocation();

  let parentClass = "";
  if (pathname.startsWith("/blog") || pathname.startsWith("/blog-details")) {
    parentClass = "active";
  }
  //
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
    <>
      <header className="header-style-two">
        <div
          id="sticky-header"
          className={`tg-header__area transparent-header ${
            sticky ? "sticky-menu" : ""
          }`}
        >
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
                        <img
                          src="/assets/img/logo/nerko-light.svg"
                          alt="Nerko"
                        />
                      </Link>
                      <Link to="/" className="dark-logo">
                        <img
                          src="/assets/img/logo/nerko-dark.svg"
                          alt="Nerko"
                        />
                      </Link>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        {menu_data_2.map((menu, i) => (
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
                        ))}
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* <!-- Mobile Menu  --> */}
                <OffCanvas setIsSidebarOpen={setIsSidebarOpen} data_2={true} />
                {/* <!-- End Mobile Menu --> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderTwo

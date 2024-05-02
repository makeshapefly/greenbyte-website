import React, { useState } from "react";
import { Link } from "gatsby";
import { Link as SinglePageLink } from "react-scroll";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const MobileMenus = ({ menuItems, setIsSidebarOpen }) => {  
  const [navTitle, setNavTitle] = useState("")
  //openMobileMenu
  const openMobileMenu = menu => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <nav>
      <ul className="navigation">
        {menuItems?.map((menu, i) => (
          <React.Fragment key={i}>
            {menu.hasDropdown && (
              <li className="active menu-item-has-children">
                {menu.title !== "Projects" && (
                  <SinglePageLink
                    onClick={() => setIsSidebarOpen(false)}
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
                {menu.title === "Projects" && (
                  <Link onClick={() => setIsSidebarOpen(false)} to={menu.link}>
                    {menu.title}
                  </Link>
                )}
                <ul
                  className="submenu"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.submenus.map((sub, i) => (
                    <li key={i}>
                      <Link
                        onClick={() => setIsSidebarOpen(false)}
                        to={sub.link}
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div
                  className={`dropdown-btn ${
                    navTitle === menu.title ? "open" : ""
                  }`}
                  onClick={() => openMobileMenu(menu.title)}
                >
                  <span className="plus-line"></span>
                </div>
              </li>
            )}
            {!menu.hasDropdown && menu.title !== "Blog" && (
              <li>
                <AnchorLink
                onAnchorLinkClick={() => setIsSidebarOpen(false)}
                  to={`/#${menu.link}`}
                  title={menu.title}
                  className="section-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                />
              </li>
            )}
            {menu.title === "Blog" && (
              <li>
                <AnchorLink to={`/${menu.link}`} title={menu.title} />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}

export default MobileMenus

import { Link } from "gatsby";
import React,{useState,useEffect} from "react";
// internal
import MobileMenus from "./mobile-menus";
import { menu_data,menu_data_2,menu_data_3 } from "../../../data/menu_data";

const OffCanvas = ({setIsSidebarOpen,data_1=false,data_2=false,data_3=false}) => {
  const [menuItems, setMenuItems] = useState([]);
  // decide to render
  useEffect(() => {
    if(data_1){
      setMenuItems(menu_data)
    }
    if(data_2){
      setMenuItems(menu_data_2)
    }
    if(data_3){
      setMenuItems(menu_data_3)
    }
  },[])
  return (
    <>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn" onClick={()=> setIsSidebarOpen(false)}>
            <i className="flaticon-close-1"></i>
          </div>
          <div className="nav-logo">
            <Link to="/" className="light-logo">
              <img src="/assets/img/logo/nerko-light.svg" alt="Nerko" />
            </Link>
            <Link to="/" className="dark-logo">
              <img src="/assets/img/logo/nerko-dark.svg" alt="Nerko" />
            </Link>
          </div>
          <div className="tgmobile__menu-outer">
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            <MobileMenus menuItems={menuItems} setIsSidebarOpen={setIsSidebarOpen} />
          </div>
          <div className="social-links">
            <ul className="list-wrap">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-discord"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div onClick={()=> setIsSidebarOpen(false)} className="tgmobile__menu-backdrop"></div>
    </>
  )
}

export default OffCanvas

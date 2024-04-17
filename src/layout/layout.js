import React, { useEffect } from "react";
// internal
import "../styles/index.scss";
import Header from "./headers/header";
import Footer from "./footers/footer";
import ToggleLightDark from "../components/toggle-light-dark";
import { tg_theme_toggler } from "../utils/utils";
// import Preloader from "../components/preloader";
import usePreloader from "../hooks/use-preloader";

const Layout = ({ children, blog_page = false }) => {
  const isLoading = usePreloader();

  useEffect(() => {
    if(!isLoading){
      tg_theme_toggler()
    }
  }, [isLoading])

  // if(isLoading){
  //   return <Preloader/>
  // }

  return (
    <React.Fragment>
      {/* {isLoading ? (
        <Preloader />
      ) : ( */}
        <>
          <Header blog_page={blog_page} />
          <main id={blog_page ? "" : "home"} className="fix">
            {children}
          </main>
          <Footer />
          <ToggleLightDark />
        </>
      {/* )} */}
    </React.Fragment>
  )
}

export default Layout

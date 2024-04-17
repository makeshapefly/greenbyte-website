import React, { useEffect } from "react";
// internal
import "../styles/index.scss";
import Header from "./headers/header-3";
import FooterThree from "./footers/footer-3";
import ToggleLightDark from "../components/toggle-light-dark";
import { tg_theme_toggler } from "../utils/utils";
import usePreloader from "../hooks/use-preloader";
import Preloader from "../components/preloader";

const LayoutTwo = ({ children }) => {
  const isLoading = usePreloader()
  useEffect(() => {
    if (!isLoading) {
      tg_theme_toggler()
    }
  }, [isLoading])
  return (
    <React.Fragment>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <main id="home" className="fix">
            {children}
          </main>
          <FooterThree />
          <ToggleLightDark />
          </>
      )}
    </React.Fragment>
  )
}

export default LayoutTwo

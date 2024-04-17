import React from "react"
import { SingleBrand } from "./home-brands";

const BrandThree = () => {
  return (
    <div
      className="brand-area section-pt-30 section-pb-65"
      data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-12">
            <div className="brand__list">
              <SingleBrand img_1="wallet-01.svg" img_2="wallet-light-01.svg" />
              <SingleBrand img_1="wallet-02.svg" img_2="wallet-light-02.svg" />
              <SingleBrand img_1="wallet-03.svg" img_2="wallet-light-03.svg" />
              <SingleBrand img_1="wallet-04.svg" img_2="wallet-light-04.svg" />
              <SingleBrand img_1="wallet-05.svg" img_2="wallet-light-05.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandThree

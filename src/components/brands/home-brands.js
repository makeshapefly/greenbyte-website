import React, { useRef, useEffect } from 'react';

export function SingleBrand({ img_1, img_2, height}) {
  return (
    <div className="brand__item">
      <img
        style={{ height: height }}
        src={`/assets/img/${img_1}`}
        className="has-active-light"
        alt="brand"
      />
      <img
        style={{ height: 100 }}
        src={`/assets/img/${img_2}`}
        className="has-active-dark"
        alt="brand"
      />
    </div>
  )
}

const HomeBrands = () => {
  const animate_1 = useRef(null);

  return (
    <div
      ref={animate_1}
      className="brand-area section-pb-65"
    >
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-12">
          <h1 className="section__title text-center title-mb-75">Who We've Worked With</h1>
            <div className="brand__list">
              <SingleBrand img_1="wallets/carbonplace.svg" img_2="wallets/carbonplace.svg" height={80}/>
              <SingleBrand img_1="retrofit/guce.jpg" img_2="retrofit/guce.jpg" height={100} />
              <SingleBrand img_1="artwork/ukpn.png" img_2="artwork/ukpn.png" height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBrands

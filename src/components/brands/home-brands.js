import React, { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export function SingleBrand({ img_1, img_2, }) {
  return (
    <div className="brand__item">
      <img
        style={{height:40}}
        src={`/assets/img/wallets/${img_1}`}
        className="has-active-light"
        alt="brand"
      />
      <img
        style={{height:40}}
        src={`/assets/img/wallets/${img_2}`}
        className="has-active-dark"
        alt="brand"
      />
    </div>
  )
}

const HomeBrands = () => {
  const animate_1 = useRef(null);
  // animate
  // useEffect(() => {
  //   anime({
  //     targets: animate_1.current,
  //     opacity: [0, 1], translateY: [24, 0], delay: 300,
  //     begin: () => {
  //       anime.set(animate_1.current, { opacity: '1' })
  //     },
  //   })
  // }, [])

  return (
    <div
      ref={animate_1}
      className="brand-area section-pb-65"
      // style={{ opacity: "0" }}
    >
      <div className="container">
        <div className="row justify-content-center">
            <h1 className="section__title text-center title-mb-75">Who We've Worked With</h1>
            <div className="brand__list">
              <SingleBrand img_1="carbonplace.svg" img_2="carbonplace.svg" style={{ height: 100 }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBrands

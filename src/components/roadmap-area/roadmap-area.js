import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

// sliderSetting
const sliderSetting = {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    1500: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".tg-swiper-scrollbar",
    type: "progressbar",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".tg-swiper-next",
    prevEl: ".tg-swiper-prev",
  },
}
// slider_data
const slider_data = [
  {
    id: 1,
    percent: "0",
    title: "Planning",
    desc: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
  {
    id: 2,
    percent: "25",
    title: "Production",
    desc: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
  {
    id: 3,
    percent: "50",
    title: "Launch",
    desc: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
  {
    id: 4,
    percent: "75",
    title: "Minting",
    desc: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
  {
    id: 5,
    percent: "95",
    title: "New Nfts",
    desc: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
  {
    id: 6,
    percent: "100",
    title: "Metaverse",
    desc: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    lists: ["Release website and logo", "Grow community", "Launch the project"],
  },
]

const RoadMapArea = () => {
  return (
    <section id="roadmap" className="roadmap-area section-pt-60 section-pb-60">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">Nerko's Roadmap</h2>
            </div>
          </div>
        </div>
        <div
          className="roadmap__wrapper"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
        >
          <div >
            <Swiper
              {...sliderSetting}
              modules={[Pagination, Navigation]}
              className="roadmap__active"
              data-anime="targets: > * > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -400; delay: anime.stagger(200);"
            >
              {slider_data.map(item => {
                return (
                  <SwiperSlide key={item.id}>
                  <div className="roadmap__card">
                    <div className="roadmap__percent">
                      <span>{item.percent}</span>%
                    </div>
                    <div className="roadmap__step">
                      <span className="tg-text-gradient d-inline-flex">
                        Phase 0{item.id}
                      </span>
                    </div>
                    <h3 className="roadmap__heading">{item.title}</h3>
                    <p>
                      {item.desc}
                    </p>
                    <ul className="roadmap__lists list-wrap">
                      {item.lists.map((l,i) => (
                      <li key={i}>
                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>
                        {l}
                      </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          <div className="tg-swiper-scrollbar"></div>

          {/* <!-- Navigation --> */}
          <a aria-label="Prev" href="#prev" className="tg-swiper-prev">
            <i className="fas fa-chevron-left"></i>
          </a>
          <a aria-label="Next" href="#next" className="tg-swiper-next">
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default RoadMapArea

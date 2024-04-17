import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
// internal
import collection_data from "../../data/collection-data"

// slider setting
const slider_setting = {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 48,
  breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: true,
      centeredSlidesBounds: true,
      spaceBetween: 35,
    },
    576: {
      slidesPerView: 2,
      centeredSlides: true,
      centeredSlidesBounds: true,
      spaceBetween: 30,
    },
    420: {
      slidesPerView: 2,
      centeredSlides: true,
      centeredSlidesBounds: true,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".tg-swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".tg-swiper-next",
    prevEl: ".tg-swiper-prev",
  },
}

const CollectionAreaThree = () => {
  return (
    <section
      id="collection"
      className="collection-area section-pt-70 section-pb-80"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-65">
              <h2 className="title">
                Nerko's <span className="tg-text-gradient">collection</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="collection__three-wrapper">
          <Swiper
            {...slider_setting}
            modules={[Navigation, Pagination]}
            className="swiper-container collection-three-active swiper"
          >
            {collection_data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="collection__three-item">
                  <div className="collection__three-thumb">
                    <a href="#">
                      <img src={item.img} alt="artwork" />
                    </a>
                  </div>
                  <div className="collection__three-content">
                    <h4 className="name">
                      <a href="#">#{item.name}</a>
                    </h4>
                    <span className="author">By {item.author}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="tg-swiper-pagination"></div>
          </Swiper>

          {/* <!-- Navigation --> */}
          <a aria-label="Prev" href="#prev" className="tg-swiper-prev">
            <i className="fas fa-chevron-left"></i>
          </a>
          <a aria-label="Next" href="#next" className="tg-swiper-next">
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        <div
          className="collection__btn text-center"
          data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;"
        >
          <a href="#" className="btn gradient-btn">
            <span>View collection</span>{" "}
            <i className="unicon-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CollectionAreaThree

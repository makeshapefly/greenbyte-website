import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import collection_data from "../../data/collection-data";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const CollectionAreaThree = () => {
  const slider_setting = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 48,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1500: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      768: {
        slidesPerView: 1,
        centeredSlides: true,
        centeredSlidesBounds: true,
        spaceBetween: 35,
      },
      576: {
        slidesPerView: 1,
        centeredSlides: true,
        centeredSlidesBounds: true,
        spaceBetween: 30,
      },
      420: {
        slidesPerView: 1,
        centeredSlides: true,
        centeredSlidesBounds: true,
        spaceBetween: 20,
      },
      0: { slidesPerView: 1 },
    },
    pagination: {
      el: ".tg-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tg-swiper-next",
      prevEl: ".tg-swiper-prev",
    },
  };

  const duplicatedSlides = [];
  const totalSlides = collection_data.length;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < totalSlides; j++) {
      duplicatedSlides.push(collection_data[j]);
    }
  }

  return (
    <section
      id="collection"
      className="collection-area section-pt-70 section-pb-30"
      style={{ background: "#3f423b" }}
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-65">
              <h2 className="title">
                <span style={{ color: "#FFF" }}>Community</span>{" "}
                <span className="tg-text-gradient">projects</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="collection__three-wrapper">
          <Swiper
            {...slider_setting}
            modules={[Navigation, Pagination, Autoplay]}
            className="swiper-container collection-three-active swiper"
            style={{ maxWidth: "100%", margin: "0 auto" }}
          >
            {duplicatedSlides.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="collection__three-item"
                  style={{ maxWidth: "300px", margin: "0 auto" }}
                >
                  <div className="collection__three-thumb">
                    <a href={item.link}>
                      <img src={item.img} alt="artwork" />
                    </a>
                  </div>
                  <div className="collection__three-content">
                    <h4 className="name">
                      <a href={item.link} style={{ color: "#FFF" }}>
                        {item.name}
                      </a>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="tg-swiper-pagination"></div>
          </Swiper>

          {/* Navigation */}
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
          {/*<a href="#" className="btn gradient-btn">
            <span>View collection</span>{" "}
            <i className="unicon-arrow-up-right"></i>
          </a>*/}
        </div>
      </div>
    </section>
  );
};

export default CollectionAreaThree;

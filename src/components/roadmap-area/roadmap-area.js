import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

// sliderSetting
const sliderSetting = {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 32,
  breakpoints: {
    1500: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
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
    icon: <img src="/icons/analysis.png" style={{ width: '60px' }} />,
    title: "Calculate",
    desc: "This phase involves the initial assessment and computation of relevant data to establish a baseline for the net-zero pathway.",
    lists: ["Analyze data and trends", "Inventory greenhouse gases", "Establish a baseline"],
  },
  {
    id: 2,
    icon: <img src="/icons/goals.png" style={{ width: '60px' }} />,
    title: "Set Targets",
    desc: "Specific goals and targets are defined based on the calculated data, providing a clear direction for the journey towards net-zero emissions.",
    lists: ["Short & Long Term Goals", "Track Progress Metrics", "Sector-Specific Targets"],
  },
  {
    id: 3,
    icon: <img src="/icons/reduce.png" style={{ width: '60px' }} />,
    title: "Reduce",
    desc: "This phase focuses on implementing strategies and initiatives to reduce carbon emissions and overall environmental impact.",
    lists: ["Energy Efficiency Upgrades", "Sustainable Practices", "Reduce Waste & Emissions"],
  },
  {
    id: 4,
    icon: <img src="/icons/offset.png" style={{ width: '60px' }} />,
    title: "Offset",
    desc: "After implementing reduction strategies, assess any remaining unavoidable emissions.Invest in high-quality carbon offset programs that remove greenhouse gases from the atmosphere.Focus should remain on prioritizing reductions over offsets.",
    lists: ["Offset Remaining Emissions", "Invest in Carbon Projects"],
  },
  {
    id: 5,
    icon: <img src="/icons/collaboration.png" style={{ width: '60px' }} />,
    title: "Innovation and Collaboration",
    desc: "This phase emphasizes the importance of innovation and collaboration in finding sustainable solutions and engaging stakeholders to drive positive change.",
    lists: ["Develop Sustainable Solutions", "Partner for Change", "Drive Stakeholder Engagement"],
  },
  {
    id: 6,
    icon: <img src="/icons/communication.png" style={{ width: '60px' }} />,
    title: "Transparency and Communication",
    desc: "Crucial for sharing progress, challenges, and successes of the net-zero pathway with stakeholders, fostering trust and accountability in the process.",
    lists: ["Share Progress & Challenges", "Report & Engage Stakeholders", "Foster Transparency & Trust"],
  },
];
const RoadMapArea = () => {
  return (
    <section id="netZero" className="roadmap-area section-pt-60 section-pb-60">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">NetZero Pathway</h2>
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
                    <div className="roadmap__hover">
                  <div className="roadmap__card">
                    <div style={{display:'flex', alignItems:'center', flexDirection: 'column'}}>
                    <div className="roadmap__percent ">
                      {item.icon}
                    
                    </div>
                    <h3 className="roadmap__heading">{item.title}</h3>
                    </div>
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
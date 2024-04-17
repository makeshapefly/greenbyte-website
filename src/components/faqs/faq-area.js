import React from "react";
import SingleFaq from "./single-faq";

// faq items
const faq_items = [
  {
    id: "One",
    title: "What is Nerko's NFT Collection?",
    show: true,
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    desc_2:
      "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    parent: "accordionFaq",
  },
  {
    id: "Two",
    title: "How we can buy and invest NFT?",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.",
    parent: "accordionFaq",
  },
  {
    id: "Three",
    title: "Why we should choose Nerko's NFT?",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    parent: "accordionFaq",
  },
  {
    id: "Four",
    title: "Where we can buy and sell NFts?",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.",
    parent: "accordionFaq",
  },
  {
    id: "Five",
    title: "How secure is this token?",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.",
    parent: "accordionFaq",
  },
  {
    id: "Six",
    title: "What is your contract address?",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.",
    parent: "accordionFaq",
  },
]

const FaqArea = ({spacing,style_2=false}) => {
  return (
    <section className={`faq-area ${style_2?"faq-style-two":""} ${spacing?spacing:"section-py-80"}`}>
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">Asked Questions</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-9 col-lg-10">
            <div
              className="faq__wrapper"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
              <div className="accordion" id="accordionFaq">
                {faq_items.map((item) => (
                  <SingleFaq key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqArea

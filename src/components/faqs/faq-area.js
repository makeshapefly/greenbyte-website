import React from "react";
import SingleFaq from "./single-faq";

// faq items
const faq_items = [
  {
    id: "One",
    title: "What is net zero?",
    show: true,
    desc: "Net zero refers to achieving a balance between greenhouse gas (GHG) emissions released and those removed from the atmosphere. This can be achieved through a combination of reducing emissions and increasing carbon sequestration (capturing and storing carbon dioxide).",
    parent: "accordionFaq",
  },
  {
    id: "Two",
    title: "What are the benefits of achieving net zero?",
    desc: "Benefits include improved air quality, reduced health risks, a more sustainable future, and potential cost savings through increased energy efficiency.",
    parent: "accordionFaq",
  },
  {
    id: "Three",
    title: "How can our organization/city set a net zero target?",
    desc: "Conduct a thorough GHG inventory to understand your current emissions. Set ambitious but achievable goals, considering science-based targets from organizations like the Science Based Targets initiative (SBTi).",
    parent: "accordionFaq",
  },
  {
    id: "Four",
    title: "What strategies can help us achieve net zero?",
    desc: "Strategies include increasing energy efficiency, transitioning to renewable energy sources, implementing sustainable practices in transportation and waste management, and potentially investing in carbon offset projects.",
    parent: "accordionFaq",
  },
  {
    id: "Five",
    title: "What are the biggest challenges in achieving net zero?",
    desc: "  Challenges include technological limitations, infrastructure upgrades, potential economic impacts of transitioning away from fossil fuels, and ensuring a just transition for workers.",
    parent: "accordionFaq",
  },
  {
    id: "Six",
    title: "How can we engage our stakeholders in the net zero journey?",
    desc: "Transparency and clear communication are essential. Engage with employees, residents, and investors through open dialogue and educational initiatives.",
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

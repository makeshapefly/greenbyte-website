import React from "react"

function SingleChoseItem({ id, title, desc }) {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="choose__item">
        <div className="choose__item-count tg-text-gradient">{id}.</div>
        <div className="choose__item-content">
          <h3 className="title">{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

const ChoseArea = () => {
  return (
    <section id="choose" className="choose-area section-pt-70 section-pb-80">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">Why choose us?</h2>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div
            className="row choose__item-lists"
            data-anime="targets: > * > *; opacity:[0, 1]; translateY:[48, 0]; onview: -400; delay: anime.stagger(100);"
          >
            <SingleChoseItem
              id="01"
              title={
                <>
                  Huge <br /> collection
                </>
              }
              desc="A collection of 5,000 unique Nerkos built to go beyond the digital space that will unlock numerous benefits for our community."
            />
            <SingleChoseItem
              id="02"
              title={
                <>
                  High <br /> quality
                </>
              }
              desc="The nerko’s collection includes dozens of rare heads, costumes, and colorways of the artist's palette. They are drawn with great care."
            />
            <SingleChoseItem
              id="03"
              title={
                <>
                  Top <br /> resource
                </>
              }
              desc="Tasty design resources made with care for each pixel. Tokens, metaverse and game resources NFTs. Access additional drops."
            />
            <SingleChoseItem
              id="04"
              title={
                <>
                  Big <br /> community
                </>
              }
              desc="Be part of a community of nerko owners and create user generated items. Rent, advertise, lounch stores, create items. We make it easy to discover."
            />
          </div>
          <img
            src="/assets/img/objects/circle-01.png"
            className="top-left"
            width="16"
            alt="Object"
            style={{top:'-16%',left:'8%'}}
          />
          <img
            src="/assets/img/objects/circle-02.png"
            className="bottom-right"
            width="24"
            alt="Object"
            style={{bottom:'16%',right:'-8%'}}
          />
          <img
            src="/assets/img/objects/x.png"
            className="bottom-left"
            width="28"
            alt="Object"
            style={{bottom:'16%',left:'-8%'}}
          />
        </div>
      </div>
    </section>
  )
}

export default ChoseArea

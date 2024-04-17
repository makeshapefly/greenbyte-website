import React from "react"

const NewsLetterArea = () => {
  return (
    <section className="newsletter-area section-py-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="newsletter__wrapper text-center">
              <img
                className="top-right"
                width="24"
                src="/assets/img/objects/x.png"
                alt="Object"
                style={{top:"16%",right:"16%"}}
              />

              <img
                className="top-left"
                width="16"
                src="/assets/img/objects/circle-01.png"
                alt="Object"
                style={{top:"16%",left:"8%"}}
              />

              <img
                className="bottom-right"
                width="44"
                src="/assets/img/objects/ethereum-02.png"
                alt="Object"
                style={{bottom:"16%",right:"8%"}}
              />
              <img
                className="bottom-left"
                width="32"
                src="/assets/img/objects/dcoin.png"
                alt="Object"
                style={{bottom:"24%",left:"16%"}}
              />

              <div
                className="section__title"
                data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: anime.stagger(100);"
              >
                <h2 className="title">
                  Never <span className="tg-text-gradient">miss a drop!</span>
                </h2>
                <p>
                  Subscribe to our super-rare and exclusive drops &
                  collectibles.
                </p>
                <form onSubmit={e => e.preventDefault()} className="newsletter__form">
                  <input type="email" placeholder="Enter your email" required />
                  <button type="submit" className="btn gradient-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetterArea

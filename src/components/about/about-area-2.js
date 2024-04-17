import React from "react"

// about box
function AboutBox({ about_img, sub_title, title, content_1, content_2 }) {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div
          className="about__img"
          data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
        >
          <img src={`/assets/img/others/${about_img}`} alt="img" />
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="about__content"
          data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
        >
          <div className="section__title text-start">
            <span className="sub-title tg-text-gradient">{sub_title}.</span>
            <h2 className="title">{title}</h2>
          </div>
          <p>{content_1}</p>
          <p>{content_2}</p>
          <div className="about__content-text-btn">
            <a href="#">
              <span>Learn more</span>
              <i className="unicon-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutAreaTwo = () => {
  return (
    <section
      id="about"
      className="about-area about-style-two section-pt-70 section-pb-80"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">
                How it <span className="tg-text-gradient">works!</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="about__row-reverse">
          <AboutBox
            about_img="features-07.png"
            sub_title="01"
            title="Setup and connect your wallet."
            content_1="Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app."
            content_2="Lorem ipsum dolor sit amet consectetur adipisicing elit Metamask or any wallet ipsam temporibus."
          />
          <AboutBox
            about_img="features-05.png"
            sub_title="02"
            title="Create your own digital artwork"
            content_1="Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artwork's & digital artwork."
            content_2="Starting the production on the procedurally generated planets and the smart contract for minting."
          />
          <AboutBox
            about_img="features-06.png"
            sub_title="03"
            title="Choose a platform to sell your NFT"
            content_1="Earn ETH and BIT for all your NFTs that you sell on our marketplace."
            content_2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae doloremque a officiis quasi autem!"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutAreaTwo

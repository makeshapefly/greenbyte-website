import React from "react";

const CarbonMarketDetails = () => {
  return (
    <section id="carbon-market" className="carbon-market section-pt-70 section-pb-80">
      <div className="banner__background-wrap">
          <div
            className="background"
            style={{ backgroundImage: "url(/assets/img/bg/gradient_bg01.png" }}
          ></div>
        </div>
      <div className="container">
      <div className="carbon-market-bg">
        <div style={{paddingLeft:"50px", paddingTop:"200px"}}>
        <h1 style={{color:'#ffffff'}}>Carbon Market</h1>
        </div>
          </div>
          <div className="row align-items-center">
          <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                style={{marginLeft:"10px", textAlign:'justify'}}
              >
                <p>
                Carbon credits aim to decrease greenhouse gas emissions. Each credit signifies the permission to release gases equivalent to one ton of CO2. The objective is to diminish credits over time, encouraging companies to adopt inventive strategies for emission reduction.<br/><br/>To offset unavoidable emissions, businesses and individuals can purchase carbon credits from certified projects supporting community development, preserving ecosystems, or implementing efficient emission-reducing technologies. 
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="carbonMarket__img"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
              >
                <img src="/assets/img/carbonMarket/cm.png" alt="img" style={{borderRadius:'20px'}}/>
              </div>
            </div>            
          </div>
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="text-center sub-title tg-text-gradient" style={{marginTop:'50px',marginBottom:'40px'}}>
              <h1 className="title">How Carbon Credits Works ?</h1>
            </div>
          </div>
        </div>
        <div className="about__row-reverse">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="carbonMarket__img"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
              >
                <img src="/assets/img/carbonMarket/cm-lifecycle.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                style={{textAlign:'justify'}}
              >
                <p>
                Carbon credits aim to decrease greenhouse gas emissions. Each credit signifies the permission to release gases equivalent to one ton of CO2. The objective is to diminish credits over time, encouraging companies to adopt inventive strategies for emission reduction.<br/><br/>To offset unavoidable emissions, businesses and individuals can purchase carbon credits from certified projects supporting community development, preserving ecosystems, or implementing efficient emission-reducing technologies. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="text-center sub-title tg-text-gradient" style={{marginTop:'50px',marginBottom:'40px'}}>
              <h1 className="title">Role We Played So Far ?</h1>
            </div>
          </div>
          <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                style={{marginLeft:"10px", textAlign:'justify'}}
              >
              <p> At <span className="tg-text-gradient"><b>GreenByte</b></span>, we spearheaded a groundbreaking project to construct a state-of-the-art Carbon Credits Trading Platform, showcasing our expertise in building robust, highly scalable, and feature-rich solutions for carbon credit trading. <br/><br/>The resulting platform boasts a bank-grade secure application utilizing blockchain technology and cloud-native architecture, specifically tailored for seamless carbon credits trading.<br/><br/> Our decentralized platform, built with microservices and cloud-native architecture, employs API-led connectivity and Kafka messaging for real-time capabilities, ensuring swift and secure communication between components. To fortify against unauthorized access, we integrated robust identity and access management with a zero-trust approach, ensuring that only authorized users can engage with the platform. Ensuring utmost security and reliability, we implemented DevOps and Dev SecOps shift left practices throughout the project lifecycle, enhancing collaboration, automation, and security in development and operations. <br/><br/> Our team's automation efforts spanned development and deployment workflows, including pipelines, functional and nonfunctional tests, and gating. This not only accelerated development but also minimized errors, ensuring a more efficient and reliable outcome. <br/><br/> In summary, <span className="tg-text-gradient"><b>GreenByte's</b></span> expertise in carbon markets is demonstrated through the development of a sophisticated, bank-grade secure application underpinned by blockchain. The integration with key players in the carbon market, coupled with DevOps and Dev SecOps practices, QA automation techniques, Kafka messaging, and advanced identity and access management, collectively contributes to a powerful and efficient Carbon Credits Trading Platform.
                </p>
              </div>
              <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="text-center sub-title tg-text-gradient" style={{marginTop:'50px',marginBottom:'40px'}}>
              <h1 className="title">Carbon Credit Trading Platform</h1>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div
            data-anime="targets: > * > *; opacity:[0, 1]; translateY:[48, 0]; onview: -400; delay: anime.stagger(100);"
            style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}
          >
            <div className='about__content trading-platform-container'>
            <p>
              Our platform seamlessly integrates carbon credit trading with Codefi in a secure microservices architecture, delivering cloud-native functionality. It ensures bank-grade security, meeting stringent standards for data protection and compliance.
              </p>
              <div className="trading-platform">
              <span className="btn">CODEFI</span>
              <span className="btn">CLOUD NATIVE</span>
              <span className="btn">MICROSERVICES</span>
              <span className="btn">BANK GRADE SECURE PLATFORM</span>
              </div>
            </div>
            <div className='about__content trading-platform-container'>
            <p>
            We ensure quality through automated testing (Postman for API, Selenium for UI, JMeter for performance) and fully automated CI/CD using GitOps, emphasizing an all-code approach and stringent gating.
              </p>
              <div className="trading-platform">
              <span className="btn" > POSTMAN</span>
              <span className="btn" >SELENIUM</span>
              <span className="btn" >JMETER</span>
              <span className="btn" >GITOPS</span>
              <span className="btn" >CI / CD</span>
              <span className="btn" > DEVOPS</span>
              <span className="btn" >ALL CODE APPROACH</span>
              </div>
            </div>
            <div className='about__content trading-platform-container'>
            <p>
            Our tech stack comprises cutting-edge technologies and powerful tools, allowing our team to expertly build and maintain our sophisticated infrastructure efficiently.
              </p>
              <div className="trading-platform">
              <span className="btn" >NODE.JS</span>
              <span className="btn" >NESTJS</span>
              <span className="btn" >REACT</span>
              <span className="btn" >TYPESCRIPT</span>
              <span className="btn" >COSMOS DB</span>
              <span className="btn" >POSTGRESQL</span>
              <span className="btn" >REDIS</span>
              <span className="btn" >KAFKA</span>
              <span className="btn" >HYPERLEDGER BESU</span>
              <span className="btn" >CIAM (AUTH0)</span>
              <span className="btn" >API-LED ARCHITECTURE</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default CarbonMarketDetails

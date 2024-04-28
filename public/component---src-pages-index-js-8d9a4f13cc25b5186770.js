"use strict";(self.webpackChunk_greenbyte_gatsby=self.webpackChunk_greenbyte_gatsby||[]).push([[678],{6945:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=d;var l=i(a(7294)),n=a(1883),s=i(a(5697)),c=a(2284);function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e){var t=e.to,a=e.title,s=e.children,i=e.className,r=e.stripHash,o=void 0!==r&&r,d=e.gatsbyLinkProps,u=void 0===d?{}:d,g=e.onAnchorLinkClick,E=o?c.handleStrippedLinkClick:c.handleLinkClick,p=m(m({},u),{},{to:o?(0,c.stripHashedLocation)(t):t,onClick:function(e){return E(t,e,g)}});return a&&(p.title=a),i&&(p.className=i),l.default.createElement(n.Link,p,s||a)}d.propTypes={to:s.default.string.isRequired,title:s.default.string,className:s.default.string,stripHash:s.default.bool,gatsbyLinkProps:s.default.object,onAnchorLinkClick:s.default.func,children:s.default.node}},3089:function(e,t,a){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return l.AnchorLink}});var l=a(6945)},9841:function(e,t,a){var l=a(7294);t.Z=()=>l.createElement("section",{id:"about",className:"about-area section-pt-70 section-pb-80"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row justify-content-center","data-anime":"opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"},l.createElement("div",{className:"col-xl-8 col-lg-10"},l.createElement("div",{className:"section__title text-center title-mb-80"},l.createElement("h2",{className:"title"},"About Us")))),l.createElement("div",{className:"about__row-reverse"},l.createElement("div",{className:"row align-items-center"},l.createElement("div",{className:"col-lg-6"},l.createElement("div",{className:"about__img","data-anime":"opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"},l.createElement("img",{src:"/assets/img/others/image.png",alt:"img"}))),l.createElement("div",{className:"col-lg-6"},l.createElement("div",{className:"about__content","data-anime":"opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"},l.createElement("div",{className:"section__title text-start"},l.createElement("h1",{className:"sub-title tg-text-gradient"},"Who We Are")),l.createElement("p",null,"We are a team of carbon reduction consultants, software and data engineers, and community activists engaged in a broad range of initiatives to lower harmful emissions and build sustainable local communities."),l.createElement("ul",{className:"list-unstyled"},l.createElement("li",{className:"list-item"},l.createElement("i",{className:"check-icon"},"✓"),"Technology that is accessible to communities and facilitates change"),l.createElement("li",{className:"list-item"},l.createElement("i",{className:"check-icon"},"✓"),"Data that informs the decision making process"),l.createElement("li",{className:"list-item"},l.createElement("i",{className:"check-icon"},"✓"),"Physical infrastructure that solves today's problems"))))),l.createElement("div",{className:"row align-items-center"},l.createElement("div",{className:"col-lg-6"},l.createElement("div",{className:"about__img","data-anime":"opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"},l.createElement("img",{src:"/assets/img/others/about-img1.jpg",alt:"img"}))),l.createElement("div",{className:"col-lg-6"},l.createElement("div",{className:"about__content","data-anime":"opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"},l.createElement("div",{className:"section__title text-start"},l.createElement("h1",{className:"sub-title tg-text-gradient"},"What We Do")),l.createElement("p",null,"We help clients with their Net Zero initatives.",l.createElement("br",null),l.createElement("br",null),"We bring people, data and technology together to reach incredible outcomes.",l.createElement("br",null),l.createElement("br",null),"Nothing is beyond our remit in the quest to help individuals, communities, councils, businesses and Government to reduce harmful emissions."),l.createElement("div",{className:"about__facts-list"},l.createElement("div",{className:"about__icon-box"},l.createElement("div",{className:"icon"},l.createElement("i",{className:"unicon-select-window"})),l.createElement("h5",null,"Advise")),l.createElement("div",{className:"about__icon-box"},l.createElement("div",{className:"icon"},l.createElement("i",{className:"unicon-building"})),l.createElement("h5",null,"Build")),l.createElement("div",{className:"about__icon-box"},l.createElement("div",{className:"icon"},l.createElement("i",{className:"unicon-collaborate"})),l.createElement("h5",null,"Collabarate")))))))))},5063:function(e,t,a){a.d(t,{Z:function(){return b}});var l=a(7294),n=a(1883),s=a(6396),c=a(6261),i=a(3089),r=a(7896),m=a(2962),o=a(4138),d=a(9507);var u=e=>{let{page:t}=e;const{sticky:a}=(0,o.Z)(),{0:u,1:g}=(0,l.useState)(!1);let{pathname:E}=(0,r.useLocation)(),p="";E.startsWith("/carbon-market")&&(p="active"),(0,l.useEffect)((()=>{u?s.u9.document.body.classList.add("mobile-menu-visible"):s.u9.document.body.classList.remove("mobile-menu-visible")}),[u]);return l.createElement("header",null,l.createElement("div",{id:"sticky-header",className:"tg-header__area transparent-header "+(a?"sticky-menu":"")},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12"},l.createElement("div",{onClick:()=>{g(!0)},className:"mobile-nav-toggler",style:{marginTop:"20px"}},l.createElement("i",{className:"flaticon-menu-1"})),l.createElement("div",{className:"tgmenu__wrap"},l.createElement("nav",{className:"tgmenu__nav"},l.createElement("div",{className:"logo"},l.createElement(n.Link,{to:"/",className:"light-logo"},l.createElement("img",{src:"/assets/img/logo/Greenbyte_logo.svg",alt:"GreenByte",style:{maxWidth:"200px"}})),l.createElement(n.Link,{to:"/",className:"dark-logo"},l.createElement("img",{src:"/assets/img/logo/Greenbyte_logo.svg",alt:"GreenByte",style:{maxWidth:"200px"}}))),l.createElement("div",{className:"tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex"},l.createElement("ul",{className:"navigation"},d.iN.map(((e,a)=>l.createElement(l.Fragment,{key:a},e.hasDropdown?l.createElement("li",{className:"menu-item-has-children"},"Carbon Market"!==e.title&&l.createElement(c.rU,{activeClass:"active",to:e.link,spy:!0,smooth:!0,offset:-70,duration:500,className:"section-link"},e.title),"Carbon Market"===e.title&&l.createElement(n.Link,{className:""+p,to:e.link},e.title),l.createElement("ul",{className:"sub-menu"},e.submenus.map(((e,t)=>l.createElement("li",{key:t,className:E===""+e.link?"active":""},l.createElement(n.Link,{to:e.link},e.title)))))):t&&"Blog"===e.title?l.createElement("li",null,l.createElement(i.P,{to:"/"+e.link,title:e.title})):t?l.createElement("li",null,l.createElement(i.P,{to:"/#"+e.link,title:e.title})):l.createElement("li",null,"Blog"===e.title?l.createElement(n.Link,{to:"/"+e.link,className:"section-link"},e.title):l.createElement(c.rU,{activeClass:"active",to:e.link,spy:!0,smooth:!0,offset:-70,duration:500,className:"section-link"},e.title))))))))),l.createElement(m.Z,{setIsSidebarOpen:g,data_1:!0}))))))};const g=()=>{c.NY.scrollToTop()};var E=()=>l.createElement("footer",{className:"footer-area section-py-80"},l.createElement("div",{className:"container"},l.createElement("div",{className:"footer__wrapper"},l.createElement("div",{className:"row justify-content-center"},l.createElement("div",{className:"col-xl-5 col-lg-7 col-md-9 col-sm-11"},l.createElement("div",{className:"footer__info text-center"},l.createElement("div",{className:"footer-logo"},l.createElement(n.Link,{to:"/"},l.createElement("img",{src:"/assets/img/logo/GreenByte.svg",width:"200",alt:"GreenByte"}))),l.createElement("p",null,"The fusion of people, data, and technology results in beneficial outcomes for the planet."),l.createElement("ul",{className:"list-wrap footer__social"},l.createElement("li",null,l.createElement("a",{href:"https://www.linkedin.com/"},l.createElement("i",{className:"fab fa-linkedin"}))))))),l.createElement("div",{className:"copyright__wrapper"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-6"},l.createElement("div",{className:"copyright__text"},l.createElement("p",null,"© ",(new Date).getFullYear()," GreenByte. All rights reserved."))),l.createElement("div",{className:"col-md-6"},l.createElement("div",{className:"copyright__menu"},l.createElement("ul",{className:"list-wrap"},l.createElement("li",null,l.createElement("a",{href:"#"},"Privacy policy")),l.createElement("li",null,l.createElement("a",{href:"#"},"Terms of use")),l.createElement("li",{className:"backTop"},l.createElement("button",{onClick:g,style:{background:"transparent",border:"none"},className:"scroll-to-target","data-target":"html"},l.createElement("i",{className:"flaticon-arrowhead-up"}))))))))))),p=a(848),v=a(7439),h=a(9242);var b=e=>{let{children:t,page:a=!1}=e;const n=(0,h.Z)();return(0,l.useEffect)((()=>{n||(0,v.X)()}),[n]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement(u,{page:a}),l.createElement("main",{id:a?"":"home",className:"fix"},t),l.createElement(E,null),l.createElement(p.Z,null)))}},145:function(e,t,a){a.r(t),a.d(t,{Head:function(){return _},default:function(){return w}});var l=a(7294),n=a(1707),s=a(2543);var c=()=>{(0,l.useRef)(null),(0,l.useRef)(null),(0,l.useRef)(null),(0,l.useRef)(null),(0,l.useRef)(null),(0,l.useRef)(null),(0,l.useRef)(null);return(0,l.useEffect)((()=>{}),[]),l.createElement(l.Fragment,null,l.createElement("section",{className:"banner-area banner-padding position-relative"},l.createElement("div",{className:"banner__background-wrap"},l.createElement("div",{className:"background",style:{backgroundImage:"url(/assets/img/retrofit/streetscape.jpg"}})),l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-6"},l.createElement("div",{className:"banner__content","data-anime":"opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"},l.createElement("h2",{className:"title",style:{marginTop:0}},"Net zero technologists"),l.createElement("p",null,l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12",style:{fontSize:24,color:"#000"}},"people ",l.createElement("img",{src:"/assets/img/retrofit/icons8-sum-50.png"}),"data ",l.createElement("img",{src:"/assets/img/retrofit/icons8-sum-50.png"}),"technology")))),l.createElement("div",{style:{marginTop:50}},l.createElement("a",{href:"#about",class:"btn btn-outline-success",role:"button","aria-pressed":"true"},"Tell me more ->")))),l.createElement("div",{className:"col-lg-6"},l.createElement("div",{className:"banner__images-grid"},l.createElement("div",{className:"banner__images-two","data-anime":"opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"},l.createElement("img",{className:"shape-one",width:"40",src:"/assets/img/objects/circle-01.svg",alt:"object",style:{top:"-8%",right:"40%"},"data-anime":"opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"}),l.createElement("img",{className:"shape-two",width:"64",src:"/assets/img/objects/star-05.svg",alt:"object",style:{right:"0%"},"data-anime":"opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"}),l.createElement("img",{className:"shape-four",width:"40",src:"/assets/img/objects/circle-02.svg",alt:"object",style:{bottom:"0%",left:"-15%"},"data-anime":"opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"}),l.createElement("img",{className:"shape-five",width:"64",src:"/assets/img/objects/start-04.svg",alt:"object",style:{bottom:"24%",left:"-10%"},"data-anime":"opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"}),l.createElement("div",{className:"left"},l.createElement("img",{src:"/assets/img/artwork/Himg-bgremoved.png",alt:"artwork"})))))))))},i=a(5063),r=a(161),m=a(9841),o=a(7967),d=a(1128);var u=()=>l.createElement("section",{className:"team-area section-py-80"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row justify-content-center","data-anime":"opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"},l.createElement("div",{className:"col-xl-8 col-lg-10"},l.createElement("div",{className:"section__title text-center title-mb-75"},l.createElement("h2",{className:"title"},"Meet Our Team")))),l.createElement("div",{className:"team__grid-wrapper","data-anime":"targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -400; delay: anime.stagger(100);"},o.Z.slice(0,10).map((e=>l.createElement(d.Z,{key:e.id,item:e})))))),g=a(1892);var E=()=>l.createElement("section",{id:"contact",className:"cta-area"},l.createElement("div",{className:"cta-bg",style:{backgroundImage:"url(/assets/img/bg/contact.png)"}}),l.createElement("div",{className:"container"},l.createElement("div",{className:"row justify-content-center"},l.createElement("div",{className:"col-xl-6 col-lg-8"},l.createElement("div",{className:"cta__content text-center"},l.createElement("img",{src:"assets/img/objects/circle.png",width:"24",alt:"Object",style:{top:"0%",left:"-16%"}}),l.createElement("img",{src:"assets/img/objects/x.png",width:"24",alt:"Object",style:{bottom:"16%",right:"-8%"}}),l.createElement("h3",{className:"title"},"Let's Connect"),l.createElement("h4",null,"Get in touch to discuss how we can collaborate on your digital journey."),l.createElement("a",{href:"#",className:"btn gradient-btn"},"Contact Us")))))),p=a(9089),v=a(6610),h=a(2263);const b={slidesPerView:3,spaceBetween:32,breakpoints:{1500:{slidesPerView:3},1200:{slidesPerView:3},992:{slidesPerView:3},768:{slidesPerView:2},576:{slidesPerView:1},0:{slidesPerView:1}},pagination:{el:".tg-swiper-scrollbar",type:"progressbar"},navigation:{nextEl:".tg-swiper-next",prevEl:".tg-swiper-prev"}},f=[{id:1,icon:l.createElement("img",{src:"/icons/analysis.png",style:{width:"60px"},alt:"img"}),title:"Calculate",desc:"This phase involves the initial assessment and computation of relevant data to establish a baseline for the net-zero pathway.",lists:["Analyze data and trends","Inventory greenhouse gases","Establish a baseline"]},{id:2,icon:l.createElement("img",{src:"/icons/goals.png",style:{width:"60px"},alt:"img"}),title:"Set Targets",desc:"Specific goals and targets are defined based on the calculated data, providing a clear direction for the journey towards net-zero emissions.",lists:["Short & Long Term Goals","Track Progress Metrics","Sector-Specific Targets"]},{id:3,icon:l.createElement("img",{src:"/icons/reduce.png",style:{width:"60px"},alt:"img"}),title:"Reduce",desc:"This phase focuses on implementing strategies and initiatives to reduce carbon emissions and overall environmental impact.",lists:["Energy Efficiency Upgrades","Sustainable Practices","Reduce Waste & Emissions"]},{id:4,icon:l.createElement("img",{src:"/icons/offset.png",style:{width:"60px"},alt:"img"}),title:"Offset",desc:"After implementing reduction strategies, assess any remaining unavoidable emissions.Invest in high-quality carbon offset programs that remove greenhouse gases from the atmosphere.Focus should remain on prioritizing reductions over offsets.",lists:["Offset Remaining Emissions","Invest in Carbon Projects"]},{id:5,icon:l.createElement("img",{src:"/icons/collaboration.png",style:{width:"60px"},alt:"img"}),title:"Innovation and Collaboration",desc:"This phase emphasizes the importance of innovation and collaboration in finding sustainable solutions and engaging stakeholders to drive positive change.",lists:["Develop Sustainable Solutions","Partner for Change","Drive Stakeholder Engagement"]},{id:6,icon:l.createElement("img",{src:"/icons/communication.png",style:{width:"60px"},alt:"img"}),title:"Transparency and Communication",desc:"Crucial for sharing progress, challenges, and successes of the net-zero pathway with stakeholders, fostering trust and accountability in the process.",lists:["Share Progress & Challenges","Report & Engage Stakeholders","Foster Transparency & Trust"]}];var N=()=>l.createElement("section",{id:"netZero",className:"roadmap-area section-pt-60 section-pb-60"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row justify-content-center","data-anime":"opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"},l.createElement("div",{className:"col-xl-8 col-lg-10"},l.createElement("div",{className:"section__title text-center title-mb-75"},l.createElement("h2",{className:"title"},"NetZero Pathway")))),l.createElement("div",{className:"roadmap__wrapper","data-anime":"opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"},l.createElement("div",null,l.createElement(v.tq,Object.assign({},b,{modules:[h.tl,h.W_],className:"roadmap__active","data-anime":"targets: > * > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -400; delay: anime.stagger(200);"}),f.map((e=>l.createElement(v.o5,{key:e.id},l.createElement("div",{className:"roadmap__hover"},l.createElement("div",{className:"roadmap__card"},l.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.createElement("div",{className:"roadmap__percent "},e.icon),l.createElement("h3",{className:"roadmap__heading"},e.title)),l.createElement("p",null,e.desc),l.createElement("ul",{className:"roadmap__lists list-wrap"},e.lists.map(((e,t)=>l.createElement("li",{key:t},l.createElement("i",{className:"unicon-checkmark-outline tg-text-gradient d-inline-flex"}),e))))))))))),l.createElement("div",{className:"tg-swiper-scrollbar"}),l.createElement("a",{"aria-label":"Prev",href:"#prev",className:"tg-swiper-prev"},l.createElement("i",{className:"fas fa-chevron-left"})),l.createElement("a",{"aria-label":"Next",href:"#next",className:"tg-swiper-next"},l.createElement("i",{className:"fas fa-chevron-right"}))))),y=a(16);var w=()=>l.createElement(i.Z,null,l.createElement(p.Z,null),l.createElement(c,null),l.createElement(r.Z,null),l.createElement(m.Z,null),l.createElement(y.Z,null),l.createElement(r.Z,null),l.createElement(N,null),l.createElement(r.Z,null),l.createElement(u,null),l.createElement(s.Z,null),l.createElement(r.Z,null),l.createElement(g.Z,null),l.createElement(r.Z,null),l.createElement(E,null));const _=()=>l.createElement(n.p,null)}}]);
//# sourceMappingURL=component---src-pages-index-js-8d9a4f13cc25b5186770.js.map
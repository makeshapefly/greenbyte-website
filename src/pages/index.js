import React  from 'react';
import { Seo } from "../components/seo"
import HomeBrands from "../components/brands/home-brands"
import HeroArea2 from "../components/hero-banner/hero-area-2"
import Layout from "../layout/layout";
import SectionDivider from "../components/section-divider"
import AboutArea from "../components/about/about-area"
import AboutArea2 from "../components/about/about-area-2"
import TeamArea from '../components/teams/team-area';
import FaqArea from '../components/faqs/faq-area';
import CtaArea from '../components/cta/cta-area';
import RoadMapArea from '../components/roadmap-area/roadmap-area';
import ChoseAreaTwo from "../components/why-chose/chose-area-2";
import CollectionAreaThree from "../components/collections/collection-area-3";

const HomePage = () => {
  return (
    <Layout>
      <HeroArea2 />
      <AboutArea2 />
      <AboutArea />
      <CollectionAreaThree/>
      <ChoseAreaTwo/>
      <SectionDivider/>
      <RoadMapArea/>
      <SectionDivider/>
      <TeamArea/>
      <HomeBrands />
      <SectionDivider/>
      <FaqArea/>
      <SectionDivider/>
      <CtaArea/>
    </Layout>
  )
}
export default HomePage;

export const Head = () => <Seo />

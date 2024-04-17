import React  from 'react';
import { Seo } from "../components/seo"
import HomeBrands from "../components/brands/home-brands"
import HeroArea from "../components/hero-banner/hero-area"
import Layout from "../layout/layout";
import MintArea from "../components/mint-area/mint-area"
import SectionDivider from "../components/section-divider"
import FactArea from "../components/fact-area/fact-area"
import AboutArea from "../components/about/about-area"
import CollectionArea from "../components/collections/collection-area"
import RoadMapArea from '../components/roadmap-area/roadmap-area';
import TeamArea from '../components/teams/team-area';
import FaqArea from '../components/faqs/faq-area';
import CtaArea from '../components/cta/cta-area';
import GradientPosition from '../components/gradient-position';

const HomePage = () => {
  return (
    <Layout>
      <GradientPosition/>
      <HeroArea />
      <HomeBrands />
      <SectionDivider />
      <MintArea />
      <SectionDivider />
      <FactArea />
      <SectionDivider />
      <AboutArea />
      <SectionDivider />
      <CollectionArea />
      <SectionDivider />
      <RoadMapArea/>
      <SectionDivider />
      <TeamArea/>
      <SectionDivider />
      <FaqArea/>
      <SectionDivider />
      <CtaArea/>
      <SectionDivider />
    </Layout>
  )
}
export default HomePage;

export const Head = () => <Seo />

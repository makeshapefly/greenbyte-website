import React  from 'react';
import { Seo } from "../components/seo";
import Layout from '../layout/layout-2';
import HeroAreaTwo from '../components/hero-banner/hero-area-2';
import CollectionAreaTwo from '../components/collections/collection-area-2';
import SectionDivider from '../components/section-divider';
import ChoseArea from '../components/why-chose/chose-area';
import AboutArea from '../components/about/about-area';
import TeamAreaTwo from '../components/teams/team-area-2';
import FactAreaTwo from '../components/fact-area/fact-area-2';
import RoadMapAreaTwo from '../components/roadmap-area/roadmap-area-2';
import FaqArea from '../components/faqs/faq-area';
import CtaAreaTwo from '../components/cta/cta-area-2';
import GradientPosition from '../components/gradient-position';

const HomePage = () => {
  return (
    <Layout>
      <GradientPosition/>
      <HeroAreaTwo/>
      <CollectionAreaTwo/>
      <SectionDivider/>
      <ChoseArea/>
      <SectionDivider/>
      <AboutArea/>
      <SectionDivider/>
      <TeamAreaTwo/>
      <SectionDivider/>
      <FactAreaTwo/>
      <SectionDivider/>
      <RoadMapAreaTwo/>
      <SectionDivider/>
      <FaqArea spacing="section-pt-70 section-pb-80" />
      <SectionDivider/>
      <CtaAreaTwo/>
    </Layout>
  )
}
export default HomePage;

export const Head = () => <Seo title="Home Two" />

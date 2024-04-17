import React from "react";
import { Seo } from "../components/seo";
import Layout from "../layout/layout-3";
import HeroAreaThree from "../components/hero-banner/hero-area-3";
import BrandThree from "../components/brands/brand-three";
import SectionDivider from "../components/section-divider";
import CollectionAreaThree from "../components/collections/collection-area-3";
import ChoseAreaTwo from "../components/why-chose/chose-area-2";
import FactAreaThree from "../components/fact-area/fact-area-3";
import AboutAreaTwo from "../components/about/about-area-2";
import NewsLetterArea from "../components/newsletter/news-letter-area";
import RoadMapAreaThree from "../components/roadmap-area/roadmap-area-3";
import TeamAreaThree from "../components/teams/team-area-3";
import FaqArea from "../components/faqs/faq-area";
import CtaAreaThree from "../components/cta/cta-area-3";
import GradientPosition from "../components/gradient-position";

const HomeThree = () => {
  return (
    <Layout>
      <GradientPosition/>
      <HeroAreaThree />
      <BrandThree />
      <SectionDivider />
      <CollectionAreaThree/>
      <SectionDivider />
      <ChoseAreaTwo/>
      <SectionDivider />
      <FactAreaThree/>
      <SectionDivider />
      <AboutAreaTwo/>
      <SectionDivider />
      <NewsLetterArea/>
      <SectionDivider />
      <RoadMapAreaThree/>
      <SectionDivider />
      <TeamAreaThree/>
      <SectionDivider />
      <FaqArea style_2={true} spacing="section-pt-70 section-pb-80" />
      <SectionDivider />
      <CtaAreaThree/>
    </Layout>
  )
}
export default HomeThree

export const Head = () => <Seo title="Home Three" />

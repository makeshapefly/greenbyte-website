import React from "react";
import { Seo } from "../components/seo";
import HomeBrands from "../components/brands/home-brands";
import HeroArea3 from "../components/hero-banner/hero-area-3";
import Layout from "../layout/layout";
import SectionDivider from "../components/section-divider";
import AboutArea from "../components/about/about-area";
import AboutArea2 from "../components/about/about-area-2";
import TeamArea from "../components/teams/team-area";
import FaqArea from "../components/faqs/faq-area";

const HomePage = () => {
  return (
    <Layout>
      <HeroArea3 />
      <AboutArea2 />
      <AboutArea />
      <TeamArea />
      <SectionDivider />
      <FaqArea />
      <SectionDivider />
    </Layout>
  );
};
export default HomePage;

export const Head = () => <Seo />;

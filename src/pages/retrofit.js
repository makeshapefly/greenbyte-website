import React from "react";
import { Seo } from "../components/seo";
import Layout from "../layout/layout";
import GradientPosition from "../components/gradient-position";
import Breadcrumb from "../components/common/breadcrumb";
import ProjectDetailsArea from "../components/projects/project-area";

const RetrofitPage = () => {
  return (
    <div className="single single-post">
      <Layout page={true}>
        <GradientPosition />
        <Breadcrumb title="Retrofitting Herts housing stock" />
        <ProjectDetailsArea/>
      </Layout>
    </div>
  )
}
export default RetrofitPage

export const Head = () => <Seo title="Retrofit" />

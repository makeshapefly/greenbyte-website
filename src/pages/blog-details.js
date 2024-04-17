import React from "react";
import { Seo } from "../components/seo";
import Layout from "../layout/layout";
import BlogBg from "../components/blog-bg";
import GradientPosition from "../components/gradient-position";
import Breadcrumb from "../components/common/breadcrumb";
import BlogDetailsArea from "../components/blog/blog-details-area";

const BlogDetailsPage = () => {
  return (
    <div className="single single-post">
      <Layout blog_page={true}>
        <GradientPosition />
        <BlogBg />
        <Breadcrumb title="Minimal workspace for inspiration" />
        <BlogDetailsArea/>
      </Layout>
    </div>
  )
}
export default BlogDetailsPage

export const Head = () => <Seo title="Blog Details" />

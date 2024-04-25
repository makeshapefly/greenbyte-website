import React from "react";
import { Seo } from "../components/seo";
import Layout from "../layout/layout";
import BlogBg from "../components/blog-bg";
import GradientPosition from "../components/gradient-position";
import Breadcrumb from "../components/common/breadcrumb";
import BlogArea from "../components/blog/blog-area";

const BlogPage = () => {
  console.log("BlogPage");
  return (
    <Layout page={true}>
      <GradientPosition />
      <BlogBg />
      <Breadcrumb title="Latest Blog" />
      <BlogArea />
    </Layout>
  );
};
export default BlogPage;

export const Head = () => <Seo title="Blog" />;

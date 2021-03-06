import React from "react"

import Layout from "../template/layout"
import SEO from "../template/seo"

import MainOffer from "../components/mainOffer"
import CompanyBenefits from "../components/companyBenefits"
import CompanyDescription from "../components/companyDescription"
// import NewReleases from "../components/newReleases"
// import Testimonials from "../components/testimonials"
import BlogPostsHomePage from "../components/blogPostHomePage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainOffer />
    <CompanyBenefits />
    <CompanyDescription />
    {/* <NewReleases /> */}
    {/* <CompanyVideo /> */}
    {/* <Testimonials /> */}
    <BlogPostsHomePage />
    <MainOffer />
  </Layout>
)

export default IndexPage

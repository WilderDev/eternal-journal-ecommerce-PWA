import React from "react"

import Layout from "../template/layout"
import SEO from "../template/seo"

import MainOffer from "../components/mainOffer"
import CompanyBenefits from "../components/companyBenefits"
// import blog

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainOffer />
    <CompanyBenefits />
    {/* <Blog numberOfPostsToShows={3} /> */}
  </Layout>
)

export default IndexPage

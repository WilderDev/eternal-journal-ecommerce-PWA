import React from "react"
import { Link } from "gatsby"

import Layout from "../template/layout"
import SEO from "../template/seo"

const AllProducts = () => (
  <Layout>
    <SEO title="All Products" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AllProducts

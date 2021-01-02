import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../template/layout"
import SEO from "../template/seo"

const Contact = () => {
  const { image } = useStaticQuery(
    graphql`
      query Images {
        image: file(relativePath: { eq: "bg/kidsInNeed.png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <Img fluid={image.childImageSharp.fluid} alt="test" />
    </Layout>
  )
}

export default Contact

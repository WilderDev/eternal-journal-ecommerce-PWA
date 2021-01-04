import React from "react"
import { useStaticQuery } from "gatsby"

import Img from "gatsby-image"

import Layout from "../template/layout"
import SEO from "../template/seo"

const OurMission = () => {
  const { image } = useStaticQuery(graphql`
    query getKidImage {
      image: file(relativePath: { eq: "bg/kidsInNeed.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Our Mission" />
      <h1>Our Mission</h1>
      <h2>To Give & Grow</h2>
      <h5>Our Mission Is Simple.</h5>
      <p>We strive to provide Clarity to those who seek a better life.</p>

      <hr />
      <h5>Beyond Our Customers</h5>

      <p>Part of Growing internally is giving back.</p>

      <p>
        That is why we are happy to give part of every sale to our friends at
        the:{" "}
        <a href="https://www.kinf.org/" target="_blank" rel="noreferrer">
          Kids In Need Foundation
        </a>
      </p>
      <p>
        What better way to buy a journal, than to do it by giving one to someone
        in need!
      </p>
      <Img fluid={image.childImageSharp.fluid} alt="Kids In Need" />
    </Layout>
  )
}

export default OurMission

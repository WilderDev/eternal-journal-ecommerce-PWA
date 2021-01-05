import React from "react"
import { useStaticQuery } from "gatsby"

import missionStyles from "../styles/mission.module.scss"
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
      <div className={missionStyles.container}>
        <h1>Our Mission: To Give & Grow</h1>
        {/* <h2>To Give & Grow</h2> */}
        <h4>Our Goal Is Simple.</h4>
        <p>
          We strive to provide <b>Clarity</b> for those who seek a better life.
        </p>
        <hr />
        <h4>Beyond Our Customers</h4>
        <h5>Part of Growing internally is giving back.</h5>
        <p>
          That is why we are happy to give part of every sale to our friends at
          the:{" "}
          <a href="https://www.kinf.org/" target="_blank" rel="noreferrer">
            Kids In Need Foundation
          </a>
        </p>
        <p>
          What better way to buy a journal, than to do it by giving one to
          someone in need!
        </p>
        <Img
          className={missionStyles.imageLogo}
          fluid={image.childImageSharp.fluid}
          alt="Kids In Need"
        />
        {/* // !!TODO: Total Amount Donated Counter */}
      </div>
    </Layout>
  )
}

export default OurMission

import React from "react"

import MainOffer from "../components/mainOffer"

import giveStyles from "../styles/giveBack.module.scss"

import kidsInNeedImg from "../images/bg/kidsInNeed.png"

import Layout from "../template/layout"
import SEO from "../template/seo"

const GiveBack = () => (
  <Layout>
    <SEO title="Give Back" />
    <div className={giveStyles.container}>
      <h1>Give Back</h1>
      <p>
        <i>*Currently not accepting donations*</i>
      </p>
      <br />
      {/* <h3>Help out by buying a Guided Journal</h3> */}
      <div className={giveStyles.mainOffer}>
        <MainOffer className={giveStyles.mainOffer} />
      </div>
      <div className={giveStyles.donate}>
        <p>
          <b>Get</b> the Guided Journal & We DONATE $1 to the{" "}
          <a href="https://www.kinf.org/" target="_blank" rel="noreferrer">
            Kids In Need Foundation
          </a>
        </p>
        <img src={kidsInNeedImg} alt="Kids In Need Foundation logo" />
      </div>
    </div>
  </Layout>
)

export default GiveBack

import React from "react"

import MainOffer from "../components/mainOffer"

import guidedJournalStyles from "../styles/guidedjournals.module.scss"

import Layout from "../template/layout"
import SEO from "../template/seo"

const GuidedJournals = () => (
  <Layout>
    <SEO title="Guided Journals" />
    <div className={guidedJournalStyles.container}>
      <div className={guidedJournalStyles.left}>
        <h1>Guided Journals</h1>
        <h2>Why Go Guided?</h2>
        <p>
          Guided Journals provide the <b>Clarity</b> you receive from writing,
          and the ease of mind from having a mentor you trust.
        </p>
        <h2>Gain The Full Benefits</h2>
        <p>
          You will see immediate mind-altering effects after your first day . .
          .
        </p>
        <p>
          But the real & lasting improvements in all areas of your life comes
          from continued practice
        </p>

        <h5>
          That is Why We HIGHLY Reccomend Getting a reoccuring journal from us
          each month
        </h5>
        <p>
          Each Day & Night Guided Journal has 31 pages for morning + evening
          use.
        </p>
      </div>
      <div className={guidedJournalStyles.right}>
        <MainOffer />
      </div>
    </div>
  </Layout>
)

export default GuidedJournals

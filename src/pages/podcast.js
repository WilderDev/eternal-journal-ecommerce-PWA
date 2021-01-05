import React from "react"

import podcastStyles from "../styles/podcast.module.scss"

import Layout from "../template/layout"
import SEO from "../template/seo"

const Podcast = () => (
  <Layout>
    <SEO title="Podcast" />
    <div className={podcastStyles.container}>
      <div className={podcastStyles.podHeading}>
        <h1>Podcast</h1>
        <p>Welcome to the podcast page</p>
      </div>
      <div className={podcastStyles.podRecent}>
        <h3>Most Recent Podcasts</h3>
        <h5>Title</h5>
        <h6>Actual Thing</h6>
        <p>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium, vero!
        </p>
      </div>
      <div className={podcastStyles.allCasts}>
        <h3>All Podcasts</h3>
        <h5>Title</h5>
        <h6>Thingoe</h6>
        <p>Desc</p>
        {/* !!!TODO: Add pagination */}
      </div>
    </div>
  </Layout>
)

export default Podcast

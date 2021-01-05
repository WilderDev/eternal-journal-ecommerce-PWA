import React from "react"

import podcastStyles from "../styles/podcast.module.scss"

import Layout from "../template/layout"
import SEO from "../template/seo"

const Podcast = () => (
  <Layout>
    <SEO title="Podcast" />
    <div className={podcastStyles.container}>
      <div className={podcastStyles.podHeading}>
        <h1>Guided Growth Podcast</h1>
        <p>
          Welcome to the podcast page. Here you will find our Guided Growth
          Podcast
        </p>
        <p>
          <b>Topics Include:</b> Growth-Mindset, Taking Action, Building Your
          Identity, Journaling & More!
        </p>
      </div>
      <hr />
      <h3>Most Recent Podcasts</h3>
      <div className={podcastStyles.podRecent}>
        <div className={podcastStyles.card1}>
          <h5>Title</h5>
          {/* <h6>Actual Thing</h6> */}
          <img src="https://source.unsplash.com/random/150x150" alt="" />
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium, vero!
          </p>
        </div>
        <div className={podcastStyles.card2}>
          <h5>Title</h5>
          {/* <h6>Actual Thing</h6> */}
          <img src="https://source.unsplash.com/random/150x150" alt="" />
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium, vero!
          </p>
        </div>
        <div className={podcastStyles.card3}>
          <h5>Title</h5>
          {/* <h6>Actual Thing</h6> */}
          <img src="https://source.unsplash.com/random/150x150" alt="" />
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium, vero!
          </p>
        </div>
      </div>
      <hr />
      <h3>All Podcasts</h3>
      <div className={podcastStyles.allCasts}>
        <div className={podcastStyles.card4}>
          <h5>Title</h5>
          {/* <h6>Actual Thing</h6> */}
          <img src="https://source.unsplash.com/random/150x150" alt="" />
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium, vero!
          </p>
        </div>
        <div className={podcastStyles.card5}>
          <h5>Title</h5>
          {/* <h6>Actual Thing</h6> */}
          <img src="https://source.unsplash.com/random/150x150" alt="" />
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium, vero!
          </p>
        </div>
        <div className={podcastStyles.card6}>
          <h5>Title</h5>
          {/* <h6>Actual Thing</h6> */}
          <img src="https://source.unsplash.com/random/150x150" alt="" />
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium, vero!
          </p>
        </div>
        <div className={podcastStyles.card7}>
          <h5>Title</h5>
          {/* <h6>Actual Thing</h6> */}
          <img src="https://source.unsplash.com/random/150x150" alt="" />
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium, vero!
          </p>
        </div>
        <div className={podcastStyles.card8}>
          <h5>Title</h5>
          {/* <h6>Actual Thing</h6> */}
          <img src="https://source.unsplash.com/random/150x150" alt="" />
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium, vero!
          </p>
        </div>
        <div className={podcastStyles.card9}>
          <h5>Title</h5>
          {/* <h6>Actual Thing</h6> */}
          <img src="https://source.unsplash.com/random/150x150" alt="" />
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium, vero!
          </p>
        </div>
        {/* !!!TODO: Add pagination */}
      </div>
    </div>
  </Layout>
)

export default Podcast

import React from "react"

import aboutStyles from "../styles/about.module.scss"

import Layout from "../template/layout"
import SEO from "../template/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className={aboutStyles.container}>
      <div className={aboutStyles.top}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          molestias voluptates vel ea, cumque blanditiis unde accusantium
          dolorem est eveniet!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          repellendus rem eos quaerat fugit delectus molestias. Libero quam
          sunt, dignissimos, ipsa tempore molestiae quo harum fugiat odit odio
          ex aspernatur.
        </p>
      </div>
      <div className={aboutStyles.profiles}>
        <div className={aboutStyles.leftProf}>
          <h4>William Wilder</h4>
          <img
            src="https://source.unsplash.com/random/100x100/?man"
            alt="William Wilder"
          />
          <h5>Owner & Operations Manager</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            necessitatibus quas labore vero facere eum!
          </p>
        </div>
        <div className={aboutStyles.rightProf}>
          <h4>Lauren Wilder</h4>
          <img
            src="https://source.unsplash.com/random/100x100/?lady"
            alt="William Wilder"
          />
          <h5>Happiness Executive & Culture Creator</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            necessitatibus quas labore vero facere eum!
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default About

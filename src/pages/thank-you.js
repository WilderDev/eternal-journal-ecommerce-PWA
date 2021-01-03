import React from "react"

import Layout from "../template/layout"
import SEO from "../template/seo"

import firstPDF from "../data/DayNightExtra_Affirmation.pdf"
import secondPDF from "../data/DayNightExtra_Quote.pdf"
import thirdPDF from "../data/DayNightExtra_Habits.pdf"

import thankYouStyles from "../styles/thankYou.module.scss"

const ThankYou = () => (
  <Layout>
    <SEO title="Thank You" />
    <div className={thankYouStyles.container}>
      <div className={thankYouStyles.top}>
        <div className={thankYouStyles.appreciate}>
          <h1>You Are Appreciated</h1>
          <h2>Thank You</h2>
          <p>
            You took the first step in the direction of your dreams & goals.
          </p>
          <p>A confirmation email will be sent to you shortly!</p>
          <p>Thank you for your patience :D</p>
        </div>

        <div className={thankYouStyles.downloads}>
          <h1>Free PDF Downloads</h1>
          <h2>Because You Are Worth It</h2>
          <p>
            <a href={firstPDF} rel="noreferrer" target="_blank">
              PDF 1: Guided Affirmations
            </a>
          </p>
          <p>
            <a href={secondPDF} rel="noreferrer" target="_blank">
              PDF 2: Quality Quotes
            </a>
          </p>
          <p>
            <a href={thirdPDF} rel="noreferrer" target="_blank">
              PDF 3: Habit Tracker
            </a>
          </p>
        </div>
      </div>
      <div className={thankYouStyles.bottom}>
        <div className={thankYouStyles.aboutUs}>
          <h1>Who We Are</h1>
          <h2>Blog</h2>
          <h2>Socials</h2>
        </div>
        <div className={thankYouStyles.purchaseAgain}>
          <h1>Purchase Again</h1>
          <h2>Get yourself a treat or Give it to a loved one</h2>
        </div>
      </div>
      <div className={thankYouStyles.claimReward}>
        <h1>Get 10% OFF Your Next Order!</h1>
        <button>Claim Your Reward</button>
      </div>
    </div>
  </Layout>
)

export default ThankYou

import React, { useState } from "react"

import faqStyles from "../styles/faq.module.scss"
import { FiArrowDown } from "@react-icons/all-files/fi/FiArrowDown"

import Layout from "../template/layout"
import SEO from "../template/seo"

function FAQ() {
  const [hidden, isHidden] = useState(true)

  return (
    <Layout>
      <SEO title="FAQ" />
      <div className={faqStyles.container}>
        <div className={faqStyles.top}>
          <h1>FAQ</h1>
          <h5>Frequently Asked Questions</h5>
        </div>

        <div className={faqStyles.bot}>
          <div className={faqStyles.question1}>
            <p>
              <b>Q:</b>What is the taco stem of a goldfish?
            </p>
            {hidden ? (
              <>
                <a onClick={() => isHidden(false)}>
                  <FiArrowDown />
                </a>
              </>
            ) : (
              <>
                <p>
                  <b>A:</b>This should be hidden by default
                </p>
                <a onClick={() => isHidden(true)}>
                  <FiArrowDown />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FAQ

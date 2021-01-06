import React, { useState } from "react"

import faqStyles from "../styles/faq.module.scss"
import { FiArrowDown } from "@react-icons/all-files/fi/FiArrowDown"
import { FiArrowUp } from "@react-icons/all-files/fi/FiArrowUp"

import Layout from "../template/layout"
import SEO from "../template/seo"

function FAQ() {
  const [hidden1, isHidden1] = useState(true)
  const [hidden2, isHidden2] = useState(true)
  const [hidden3, isHidden3] = useState(true)

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
              <b>Q:</b> What is the taco stem of a goldfish?
            </p>
            {hidden1 ? (
              <>
                <button onClick={() => isHidden1(false)}>
                  <FiArrowDown />
                </button>
              </>
            ) : (
              <>
                <p>
                  <b>A:</b> This should be hidden by default
                </p>
                <button onClick={() => isHidden1(true)}>
                  <FiArrowUp />
                </button>
              </>
            )}
          </div>
          <div className={faqStyles.question2}>
            <p>
              <b>Q:</b> Can I get it hand-signed?
            </p>
            {hidden2 ? (
              <>
                <button onClick={() => isHidden2(false)}>
                  <FiArrowDown />
                </button>
              </>
            ) : (
              <>
                <p>
                  <b>A:</b> Yeeee. Just ask
                </p>
                <button onClick={() => isHidden2(true)}>
                  <FiArrowUp />
                </button>
              </>
            )}
          </div>
          <div className={faqStyles.question3}>
            <p>
              <b>Q:</b> How many beef tenderloins does a Bushel feed?
            </p>
            {hidden3 ? (
              <>
                <button onClick={() => isHidden3(false)}>
                  <FiArrowDown />
                </button>
              </>
            ) : (
              <>
                <p>
                  <b>A:</b> This should be hidden by default
                </p>
                <button onClick={() => isHidden3(true)}>
                  <FiArrowUp />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FAQ

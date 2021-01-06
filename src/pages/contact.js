import React from "react"

import contactStyles from "../styles/contact.module.scss"

import { GrSend } from "@react-icons/all-files/gr/GrSend"

import Layout from "../template/layout"
import SEO from "../template/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className={contactStyles.container}>
        <h1>Contact Us!</h1>
        <h4>We Would Love To Hear From You</h4>
        <div className={contactStyles.formContainer}>
          <form
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
            <label>
              Subject
              <input type="text" name="subject" id="subject" />
            </label>
            <label>
              Message
              <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">
              Send <GrSend />
            </button>
          </form>
        </div>
        <h4>Thank You So Much!</h4>
      </div>
    </Layout>
  )
}

export default Contact

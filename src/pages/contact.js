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
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/guided-journals"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label>Subject</label>
              <input type="text" name="subject" />
            </div>
            <div>
              <label>Message</label>

              <textarea name="message" rows="5" />
            </div>
            <button type="submit">
              Send <GrSend />
            </button>
          </form>
        </div>
        <h4 className={contactStyles.thanks}>Thank You So Much!</h4>
      </div>
    </Layout>
  )
}

export default Contact

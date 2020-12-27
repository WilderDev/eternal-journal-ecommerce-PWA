import React from "react"

import testimonialStyles from "../styles/testimonial.module.scss"

const Testimonial = () => {
  return (
    <div className={testimonialStyles.container}>
      <h2>Hear What Our Customers Are Saying</h2>
      <div className={testimonialStyles.card}></div>
    </div>
  )
}

export default Testimonial

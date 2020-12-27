import React from "react"

import companyDescriptionStyles from "../styles/companyDescription.module.scss"

const CompanyDescription = () => {
  return (
    <div className={companyDescriptionStyles.container}>
      <h2>Who We Are</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum vel
        officiis similique odit saepe nobis id in cupiditate officia ipsa?
      </p>
      <h2>How We Give</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        quis a voluptatem obcaecati delectus earum minima?
      </p>
    </div>
  )
}

export default CompanyDescription

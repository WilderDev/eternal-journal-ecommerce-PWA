import React from "react"

import Image1 from "../images/svg/UndrawSVG/svgid4.svg"
import Image2 from "../images/svg/UndrawSVG/svgid10.svg"
import Image3 from "../images/svg/UndrawSVG/svgid8.svg"

import companyBenefitsStyles from "../styles/companyBenefits.module.scss"

const CompanyBenefits = () => {
  return (
    <div className={companyBenefitsStyles.container}>
      <div className={companyBenefitsStyles.box1}>
        <img src={Image1} alt="=Lady looking at pieces of paper illustration" />
        <h4>Easy To Use</h4>
        <p>Highly-Detailed Guided Journals</p>
      </div>
      <div className={companyBenefitsStyles.box2}>
        <img src={Image2} alt="Lady holding a large credit card illustration" />
        <h4>Fast To Order</h4>
        <p>Blazing-Speed From Order To Delivery</p>
      </div>
      <div className={companyBenefitsStyles.box3}>
        <img src={Image3} alt="Man holding lady in love illustration" />
        <h4>Fun To Share</h4>
        <p>Deepen Relationships With Yourself & Others</p>
      </div>
    </div>
  )
}

export default CompanyBenefits

import React from "react"

import companyDescriptionStyles from "../styles/companyDescription.module.scss"
import kidsInNeedImg from "../images/bg/kidsInNeed.png"

const CompanyDescription = () => {
  return (
    <div className={companyDescriptionStyles.container}>
      <h2>How We Give</h2>
      <p>
        BUY our Guided Journal & We DONATE $1 to the{" "}
        <a href="https://www.kinf.org/" target="_blank" rel="noreferrer">
          Kids In Need Foundation
        </a>
      </p>
      <img src={kidsInNeedImg} alt="Kids In Need Foundation logo" />
    </div>
  )
}

export default CompanyDescription

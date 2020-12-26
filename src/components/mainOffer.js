import React from "react"

import Checkout from "./checkout"

import mainOfferStyles from "../styles/mainOffer.module.scss"

const MainOffer = () => {
  return (
    <div className={mainOfferStyles.container}>
      <Checkout />
      {/* <h3>Main Offer</h3> */}
    </div>
  )
}

export default MainOffer

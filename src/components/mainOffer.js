import React from "react"
import { Link } from "gatsby"

import Checkout from "./checkout"

import mainOfferStyles from "../styles/mainOffer.module.scss"
import dayNightImg from "../images/product/daynight.jpg"

const MainOffer = () => {
  return (
    <div className={mainOfferStyles.container}>
      <h2>Day & Night Guided Journal</h2>
      <h4>Wake Up Excited & Go To Bed Proud</h4>
      <img src={dayNightImg} alt="Day & Night Journal" />
      <Checkout />
      <p>
        <Link to="/guided-journals">Save BIG On Monthly Orders</Link>
      </p>
    </div>
  )
}

export default MainOffer

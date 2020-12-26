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
        {/* <Link to="/products/day-and-night-guided-journal">Find Out More</Link> */}
        <Link to="/">Find Out More</Link>
      </p>
    </div>
  )
}

export default MainOffer

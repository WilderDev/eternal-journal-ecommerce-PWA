import React, { useState } from "react"

import redirectToCheckout from "../utils/redirectToCheckout"

import checkoutStyles from "../styles/checkout.module.scss"

const Checkout = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div className={checkoutStyles.container}>
      <button
        className={checkoutStyles.paymentBtn}
        disabled={loading}
        style={loading ? { color: "blue" } : { color: "green" }}
        onClick={function (e) {
          redirectToCheckout(e, "PAYMENT")
          setLoading(true)
        }}
      >
        Buy Now
      </button>
      <button
        className={checkoutStyles.subscBtn}
        disabled={loading}
        style={loading ? { color: "blue" } : { color: "green" }}
        onClick={function (e) {
          redirectToCheckout(e, "SUBSCRIPTION")
          setLoading(true)
        }}
      >
        Get Monthly
      </button>
    </div>
  )
}

export default Checkout

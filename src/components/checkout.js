import React, { useState } from "react"

import getStripe from "../utils/stripe"

import checkoutStyles from "../styles/checkout.module.scss"

const Checkout = () => {
  const [loading, setLoading] = useState(false)

  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [{ price: process.env.GATSBY_BUTTON_PRICE_ID, quantity: 1 }],
      successUrl: `http://localhost8000/thank-you`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <div className={checkoutStyles.container}>
      <button
        className={checkoutStyles.buy}
        disabled={loading}
        style={loading ? { color: "blue" } : { color: "green" }}
        onClick={redirectToCheckout}
      >
        Buy Now
      </button>
    </div>
  )
}

export default Checkout

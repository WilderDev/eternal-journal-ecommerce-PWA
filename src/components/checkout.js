import React, { useState } from "react"

import getStripe from "../utils/stripe"

import checkoutStyles from "../styles/checkout.module.scss"

const Checkout = () => {
  const [loading, setLoading] = useState(false)

  const redirectToCheckout = async (event, paymentType) => {
    event.preventDefault()
    setLoading(true)

    let payMode = paymentType === "SUBSCRIPTION" ? "subscription" : "payment"

    let envPrice =
      paymentType === "SUBSCRIPTION"
        ? `price_1I0xQJLxXUvBxIOGRbX9XKfu`
        : `price_1I2h0oLxXUvBxIOGigGbtJdw`

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: `${payMode}`,
      lineItems: [{ price: envPrice, quantity: 1 }],
      successUrl: `http://localhost:8000/thank-you`,
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
        className={checkoutStyles.paymentBtn}
        disabled={loading}
        style={loading ? { color: "blue" } : { color: "green" }}
        onClick={e => redirectToCheckout(e, "PAYMENT")}
      >
        Buy Now
      </button>
      <button
        className={checkoutStyles.subscBtn}
        disabled={loading}
        style={loading ? { color: "blue" } : { color: "green" }}
        onClick={e => redirectToCheckout(e, "SUBSCRIPTION")}
      >
        Get Monthly
      </button>
    </div>
  )
}

export default Checkout

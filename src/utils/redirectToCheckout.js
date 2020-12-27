import getStripe from "./stripe"

const redirectToCheckout = async (event, paymentType) => {
  event.preventDefault()

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
  }
}

export default redirectToCheckout

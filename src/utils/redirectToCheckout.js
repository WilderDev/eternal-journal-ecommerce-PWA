import getStripe from "./stripe"

const redirectToCheckout = async (event, paymentType) => {
  event.preventDefault()

  let payMode = paymentType === "SUBSCRIPTION" ? "subscription" : "payment"

  let envPrice =
    paymentType === "SUBSCRIPTION"
      ? `price_1HynucLxXUvBxIOG9LR8TZxz`
      : `price_1HynucLxXUvBxIOGwykhuyWD`

  const stripe = await getStripe()
  const { error } = await stripe.redirectToCheckout({
    mode: `${payMode}`,
    lineItems: [{ price: envPrice, quantity: 1 }],
    successUrl: `https://eternaljournal.netlify.app/thank-you`,
    cancelUrl: `https://eternaljournal.netlify.app/`,
  })

  if (error) {
    console.warn("Error:", error)
  }
}

export default redirectToCheckout

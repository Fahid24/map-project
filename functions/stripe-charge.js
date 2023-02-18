const stripe = require("stripe")(
  "sk_test_51Lcq7BLXHvCk9rLhWD8GgCOiyyKah7AULcQZISk7GuaSbW27DpP4JlQx7DGi1xpKOPAMvmp3poTIdOXswh6PIUTn0091tMJuqJ"
)

exports.handler = async (event, context) => {
  const { amount } = JSON.parse(event.body)

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}

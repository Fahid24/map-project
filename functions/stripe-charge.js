const stripe = require("stripe")(
  "sk_test_51Lcq7BLXHvCk9rLhWD8GgCOiyyKah7AULcQZISk7GuaSbW27DpP4JlQx7DGi1xpKOPAMvmp3poTIdOXswh6PIUTn0091tMJuqJ"
)

exports.handler = async function (event) {
  const { tokenId, email, name, description, amount } = JSON.parse(event.body)

  const customer = await stripe.customers.create({
    description: email,
    source: tokenId,
  })

  await stripe.charges.create({
    customer: customer.id,
    amount,
    name,
    description,
    currency: "usd",
  })
}

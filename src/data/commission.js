// Paste the Stripe Payment Link here (Stripe → Payment Links → Copy link).
// It isn't a secret — it's the same URL a customer sees in their browser.
// Until it's set, the shop button falls back to the contact form.
export const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/8x2fZjbtNeO14xi5YwbEA00";

const commission = {
  title: "Commissioned Work",
  deposit: 100,
  summary:
    "A piece made for you. The deposit opens the conversation — the form, the clay, the glaze, and what it’s for. We settle the design, final price, and timeline together before anything is thrown.",
  steps: [
    "Pay the $100 deposit and tell me what you have in mind.",
    "I’ll email you to talk through the piece.",
    "We agree on the design, final price, and timeline.",
    "The deposit comes off your final price.",
  ],
  terms: [
    "The $100 deposit is non-refundable.",
    "It’s credited in full toward the final price of your commissioned piece.",
    "The final price and timeline are agreed over email before work begins.",
  ],
};

export default commission;

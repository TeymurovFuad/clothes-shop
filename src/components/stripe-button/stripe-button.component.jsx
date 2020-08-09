import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100,
    // const publishableKey = 'pk_test_51HEJkqDh4hpQ5VcMpxwHzNkno241zSOB0nxdITDwmd6iTZvInis7FWB2Wa1HH2IaMz2GgDfhBK62fbHgKDJdZNln00XsYUyCOf',

    onToken = (token) => {
      console.log(token);
      alert("Successful Payment");
    };

  return (
    <StripeCheckout
      name="Clothes Shop LLC."
      label="PAY NOW"
      currency="AZN"
      shippingAddress
      billingAddress
      alipay
      allowRememberMe
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Amount you pay is ${price}`}
      amount={priceForStripe}
      panelLabel="PAY NOW"
      token={onToken}
      stripeKey="pk_test_51HEJkqDh4hpQ5VcMpxwHzNkno241zSOB0nxdITDwmd6iTZvInis7FWB2Wa1HH2IaMz2GgDfhBK62fbHgKDJdZNln00XsYUyCOf"
    />
  );
};

export default StripeCheckoutButton;

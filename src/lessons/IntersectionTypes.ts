export default () => {
  interface Order {
    id: string;
    amount: number;
    currency: string;
  }

  interface Stripe {
    type: "stripe";
    card: string;
    cvc: string;
  }
  interface PayPal {
    type: "paypal";
    email: string;
  }

  type CheckoutCard = Order & Stripe;
  type CheckoutPayPal = Order & PayPal;

  const order: Order = {
    id: "x0o22",
    amount: 1100,
    currency: "USD"
  };

  const orderCard: CheckoutCard = {
    card: "1 1 11111 1 11",
    cvc: "09 09",
    ...order,
    type: "stripe"
  };

  const orderPaypal: CheckoutPayPal = {
    ...order,
    email: "",
    type: "paypal"
  };
  type Payload = CheckoutPayPal | CheckoutPayPal;
  const checkout = (payload: Payload) => {};
};

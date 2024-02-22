function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  const finlExpencive = `Shipping to ${country} will cost ${totalPrice} credits`;
  return finlExpencive;
}
console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));

function makeTransaction(quantity, totalPrice) {
  const expexcive = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  return expexcive;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

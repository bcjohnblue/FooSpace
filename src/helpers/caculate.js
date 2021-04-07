const calculate = (products) => {
  return products.reduce(
    (totalPrice, product) => totalPrice + (product.finalPrice || product.price || 0),
    0
  );
};

export default calculate;

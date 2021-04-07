import database from '../database.json';
const products = database.products;

const normalize = (productIDs) => {
  const selectedProducts = [];
  const productCounts = {};

  productIDs.forEach((productID, index) => {
    productCounts[productID] = productCounts[productID]
      ? productCounts[productID] + 1
      : 1;

    selectedProducts.push({
      id: index + 1,
      productID,
      ...products[productID],
      count: productCounts[productID]
    });
  });

  return selectedProducts;
};

export default normalize;

import database from '../database.json';
const products = database.products;

const getIsProductExist = (product) => product && product.name;

const normalize = (productIDs) => {
  const selectedProducts = [];
  const productCounts = {};

  productIDs.forEach((productID, index) => {
    productCounts[productID] = productCounts[productID]
      ? productCounts[productID] + 1
      : 1;

    const isProductExist = getIsProductExist(products[productID]);
    if (isProductExist) {
      selectedProducts.push({
        id: index + 1,
        productID,
        ...products[productID],
        count: productCounts[productID]
      });
    }
  });

  return selectedProducts;
};

export default normalize;

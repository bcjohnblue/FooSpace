import { groupBy } from '../utils';

const PROMOTION_NAME = 'SecondItem50PercentOff';

const SecondItem50PercentOff = (products) => {
  // console.log(products);

  const groupProducts = groupBy(products, 'productID');
  // console.log(groupProducts);

  const result = Object.values(groupProducts).map((products) => {
    const promoteIndex = products.length >= 2 ? products.length / 2 : -1;

    return products.map((product, index) => {
      let isPromote = index <= promoteIndex;
      if (isPromote) {
        product.promote = PROMOTION_NAME;
        product.finalPrice = product.price;
      }
      if (product.count % 2 === 0) {
        product.finalPrice = product.price / 2;
      }

      return product;
    });
  });

  return result.flat();
};

export default SecondItem50PercentOff;

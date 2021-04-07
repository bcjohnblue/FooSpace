import normalize from './helpers/normalize';
import caculate from './helpers/caculate';
import promotion from './promotion';

export const checkout = (productIDs = []) => {
  // Please complete your code here.
  // Product's detail can be found in `database`.
  const products = normalize(productIDs);
  const result = promotion(products);
  const totalPrice = caculate(result);

  return totalPrice;
};

document.getElementById('app').innerHTML =
  'Your price is $' + checkout(['003', '002', '003', '003', '004']);

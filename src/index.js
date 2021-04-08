import checkout from './helpers/checkout';

document.getElementById('app').innerHTML =
  'Your price is $' + checkout(['003', '002', '003', '003', '004']);

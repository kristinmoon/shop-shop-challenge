import * as CONST from '../constants';

export default (products) => ({
  type: CONST.SHOP_SET_PRODUCTS,
  payload: products,
});

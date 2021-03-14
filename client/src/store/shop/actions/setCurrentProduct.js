import * as CONST from '../constants';

export default (currentProduct) => ({
  type: CONST.SHOP_SET_CURRENT_PRODUCT,
  payload: currentProduct,
});

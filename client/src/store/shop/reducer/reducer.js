import * as CONST from '../constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.SHOP_SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      }
    case CONST.SHOP_SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: payload,
      }
    default:
      return state;
  }
}

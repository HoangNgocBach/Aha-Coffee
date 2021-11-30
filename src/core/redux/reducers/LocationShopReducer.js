import produce from 'immer';
import {LocationShopTypes} from '../constants/index';

const initialState = {
dataShop:[]
};

export const LocationShopReducer = (state = initialState, action) =>
  produce(state, draft => {
    const {payload, type} = action;

    switch (type) {
      case LocationShopTypes.ADD_DATA_SHOP:
        draft.dataShop = payload;
        break;
      default:
        break;
    }
  });

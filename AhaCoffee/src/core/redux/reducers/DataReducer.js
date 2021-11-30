import produce from 'immer';
import {DataTypes} from '../constants/index';

const initialState = {
  phone: '',
  addressCur: '',
  addressShop: '',
  dataCoffee: [],
};

export const DataReducer = (state = initialState, action) =>
  produce(state, draft => {
    const {payload, type} = action;

    switch (type) {
      case DataTypes.DATA_PHONE:
        draft.phone = payload;
        break;
      case DataTypes.DATA_ADDRESSCUR:
        draft.addressCur = payload;
        break;
      case DataTypes.DATA_ADDRESS_SHOP:
        draft.addressShop = payload;
        break;
      case DataTypes.DATA_COFFEE:
        draft.dataCoffee = payload;
        break;
      case DataTypes.CLEAN_DATA:
        draft.dataCoffee = [];
        draft.addressShop = '';
        draft.addressCur= '';
        break;
      default:
        break;
    }
  });

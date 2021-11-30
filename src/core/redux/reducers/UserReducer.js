import produce from 'immer';
import {UserType} from '../constants/index';

const initialState = {
  phone: '',
  userName:"",
  addressCurText:'',
  point:0,
};

export const UserReducer = (state = initialState, action) =>
  produce(state, draft => {
    const {payload, type} = action;

    switch (type) {
      case UserType.DATA_PHONE_CUR:
        draft.phone = payload;
        break;
      case UserType.DATA_CUR:
        draft.userName = payload;
        break;
      case UserType.DATA_ADDRESS_TEXT:
        draft.addressCurText = payload;
        break;
      case UserType.DATA_POINT:
        draft.point = payload;
        break;
      default:
        break;
    }
  });

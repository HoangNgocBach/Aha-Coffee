import {UserType} from '../constants';

class UserActions {
  updatePhone(data) {
    return { type: UserType.DATA_PHONE_CUR, payload: data};
  }
  updateUserName(data){
    return { type: UserType.DATA_CUR, payload: data };
  }
  updateAddressText(data) {
    return { type: UserType.DATA_ADDRESS_TEXT, payload: data };
  }
  updatePoint(data) {
    return { type: UserType.DATA_POINT, payload: data };
  }
}

export default new UserActions();

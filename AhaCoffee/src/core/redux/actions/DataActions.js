import {DataTypes} from '../constants/';

class DataActions {
  updatePhone(data) {
    return {type: DataTypes.DATA_PHONE, payload: data};
  }
  updateAddressCur(data) {
    return { type: DataTypes.DATA_ADDRESSCUR, payload: data };
  }
  updateDataAddressShop(data) {
    return { type: DataTypes.DATA_ADDRESS_SHOP, payload: data };
  }
  updateDataCoffe(data) {
    return { type: DataTypes.DATA_COFFEE, payload: data };
  }
  cleanData(){
    return {type: DataTypes.CLEAN_DATA};
  }
  updateUserName(){
    return { type: DataTypes.DATA_CUR, payload: data };
  }
  updateAddressText() {
    return { type: DataTypes.DATA_ADDRESS_TEXT, payload: data };
  }
}

export default new DataActions();

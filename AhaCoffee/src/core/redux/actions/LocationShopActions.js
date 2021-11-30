import {LocationShopTypes} from '../constants';

class LocationShopActions {
  updateListDataShop(data) {
    return { type: LocationShopTypes.ADD_DATA_SHOP, payload: data};
  }

}

export default new LocationShopActions();

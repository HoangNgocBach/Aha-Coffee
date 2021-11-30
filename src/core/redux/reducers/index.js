/*
 * combines all th existing reducers
 */
import * as DataReducer from './DataReducer';
import * as LocationShopReducer from './LocationShopReducer'
import * as UserReducer from './UserReducer';
import * as HistoryReducer from './HistoryReducer';

export default Object.assign({}, DataReducer, LocationShopReducer, UserReducer, HistoryReducer);

import {DataTypes, HistoryTypes} from '../constants';

class HistoryActions {
  updateHistory(data) {
    return {type: HistoryTypes.ADD_HISTORY, payload: data};
  }
}

export default new HistoryActions();

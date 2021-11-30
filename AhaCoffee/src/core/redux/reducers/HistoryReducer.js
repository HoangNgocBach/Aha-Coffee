import produce from 'immer';
import { HistoryTypes } from '../constants/index';

const initialState = {
listDataHistory:[]
};

export const HistoryReducer = (state = initialState, action) =>
    produce(state, draft => {
        const { payload, type } = action;
        switch (type) {
            case HistoryTypes.ADD_HISTORY:
                draft.listDataHistory = payload;
                break;
            default:
                break;
        }
    });

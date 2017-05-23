import { ActionReducer, Action } from '@ngrx/store';
import { Item } from './app.state';

export const SELECT_ITEM ='SELECT_ITEM';
export const CLEAR_SELECT ='CLEAR_SELECT';

export function itemReducer(state = {}, action: Action) {
    switch(action.type){
        case SELECT_ITEM:
            return action.payload;
        case CLEAR_SELECT:
            return {};
        default:
            return state;
    }
}
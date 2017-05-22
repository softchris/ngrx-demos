// counter.ts
import { ActionReducer, Action } from '@ngrx/store';

export const ADD_ITEMS = 'ADD_ITEMS';
export const CREATE_ITEM = 'CREATE_ITEM';


export function itemsReducer(state = [], action: Action) {
	switch (action.type) {
		case ADD_ITEMS:
			return action.payload;
		default:
			return state;
	}
}
// counter.ts
import { ActionReducer, Action } from '@ngrx/store';
import { Item } from './app.state';

export const ADD_ITEMS = 'ADD_ITEMS';
export const CREATE_ITEM = 'CREATE_ITEM';
export const REMOVE_ITEM ='REMOVE_ITEM';
export const UPDATE_ITEM ='UPDATE_ITEM';


export function itemsReducer(state:Array<Item> = [], action: Action) {
	switch (action.type) {
		case ADD_ITEMS:
			return action.payload;
        case REMOVE_ITEM: 
            return state.filter(  x => x.id !== action.payload.id )
        case CREATE_ITEM:
			action.payload.id = state.length + 1;
            return [ ...state, action.payload ]
		case UPDATE_ITEM:
			var found = state
			.filter( x => x.id === action.payload.id );
			if(found){
				return [
					...state.filter( x => x.id !== action.payload.id ),
					Object.assign({},action.payload)
				]
			} else {
				return state;
			}
			
		default:
			return state;
	}
}
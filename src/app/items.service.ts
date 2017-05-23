import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { AppState, Item } from './app.state';
import { Observable } from 'rxjs';
import { CREATE_ITEM, REMOVE_ITEM, UPDATE_ITEM } from './items.reducer';
import { SELECT_ITEM, CLEAR_SELECT } from './item.reducer';

@Injectable()
export class ItemsService {
    items:Observable<Array<Item>>;

    constructor(private store: Store<AppState>){
        this.items = this.store.select('items');
    }

    add(val){
        this.store.dispatch({ type : CREATE_ITEM, payload : { title:  val} });
    }

    remove(val){
        this.store.dispatch({ type : REMOVE_ITEM, payload : val  });
        this.store.dispatch({ type : CLEAR_SELECT });
    }

    update( item ) {
        this.store.dispatch({ type : UPDATE_ITEM, payload : item })
    }

    select(item){
        this.store.dispatch({ type: SELECT_ITEM, payload : item })
    }

}
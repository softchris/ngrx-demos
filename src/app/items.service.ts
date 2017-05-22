import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { AppState, Item } from './app.state';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsService {
    items:Observable<Array<Item>>;

    constructor(private store: Store<AppState>){
        this.items = this.store.select('items');
    }
}
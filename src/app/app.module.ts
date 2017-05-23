import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, Store } from '@ngrx/store';
import { AppState } from './app.state';

import { AppComponent } from './app.component';
import { SelectedItemComponent } from './selected.item.component'
import { itemsReducer, ADD_ITEMS } from './items.reducer';
import { itemReducer, SELECT_ITEM } from './item.reducer';
import { ItemsService } from './items.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectedItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ items: itemsReducer, selectedItem : itemReducer })
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private store: Store<AppState>){
    this.store.dispatch( { type: ADD_ITEMS, payload : [ { id: 1, title : 'banana' }, { id: 2, title : 'apple' } ] } );
    this.store.dispatch( { type: SELECT_ITEM, payload : { id: 0, title : 'minion' }} );
  }
}

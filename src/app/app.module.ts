import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, Store } from '@ngrx/store';
import { AppState } from './app.state';

import { AppComponent } from './app.component';
import { itemsReducer, ADD_ITEMS } from './items.reducer';
import { ItemsService } from './items.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ items: itemsReducer })
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private store: Store<AppState>){
    this.store.dispatch( { type: ADD_ITEMS, payload : [ { title : 'banana' } ] } )
  }
}

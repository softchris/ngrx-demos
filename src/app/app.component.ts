import { Component } from '@angular/core';
import { ItemsService } from './items.service';
import { Item, AppState } from './app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items:Observable<Array<Item>>;
  selectedItem:Observable<Item>;
  item:Item;

  constructor(private itemsService:ItemsService, private store: Store<AppState>){
    this.items = store.select('items');
    var expr = store.select('selectedItem');
    this.selectedItem = expr;
    
    expr.subscribe( data => {
      console.log( data );
    });

    this.item = { id: 11, title : 'testing' };
  }

  remove( item:Item ) {
    this.itemsService.remove( item ); 
  }

  add( elem ) {
    this.itemsService.add( elem.value );
    elem.value = '';
  }

  update(item:Item){
    this.itemsService.update( item );
    // TODO
  }

  select(item:Item) {
    this.itemsService.select( item );
  }
}

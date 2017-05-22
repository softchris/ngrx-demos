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

  constructor(private itemsService:ItemsService, private store: Store<AppState>){
    this.items = store.select('items');
  }
}

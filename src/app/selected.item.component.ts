import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './app.state';


@Component({
    selector : 'selected-item',
    template : `
        <div *ngIf="item.title">
            <h2>Selected item</h2>
            <div>Id {{ item.id }}</div> 
            <div>Name <input [(ngModel)]="item.title" ></div>
            <button (click)="save()" >Update</button>
        </div>
        <div *ngIf="!item.title">
            <h2>No selection made</h2>
        </div>
    `
})
export class SelectedItemComponent {
     _item;
    @Output() update = new EventEmitter<Item>();

    @Input('item')
    set item(value){
        console.log('setting item')
        this._item = Object.assign({},value);
    }

    get item(){
        return this._item;
    }

    save(){
        this.update.next( this.item );
    }
}
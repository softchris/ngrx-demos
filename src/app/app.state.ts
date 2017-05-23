export interface Item {
    title:string;   
    id:number;
}

export interface AppState {
    items : Item[];
    selectedItem: Item;
}
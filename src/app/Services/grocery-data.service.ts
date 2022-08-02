import { Injectable } from '@angular/core';

export interface IGrocery {
  name: string;
  quantity: number;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class GroceryDataService {
  groceryList: IGrocery[] = [
    {
      name: 'Apples',
      quantity: 2,
      id: 1,
    },
    {
      name: 'Eggs',
      quantity: 4,
      id: 2,
    },
    {
      name: 'Oranges',
      quantity: 3,
      id: 3,
    },
    {
      name: 'Cucumber',
      quantity: 2,
      id: 4,
    },
  ];

  constructor() {}

  getGrocery() {
    return this.groceryList;
  }

  addGrocery(name: string, quantity: number) {
    this.groceryList.push({
      name: name,
      quantity: quantity,
      id: Math.floor(Math.random() * 1000),
    });
  }
}

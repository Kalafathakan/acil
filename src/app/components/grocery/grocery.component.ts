import { Component, OnInit } from '@angular/core';
import {
  GroceryDataService,
  IGrocery,
} from 'src/app/Services/grocery-data.service';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css'],
})
export class GroceryComponent implements OnInit {
  searchValue: string = '';
  grocery: IGrocery[] = [];
  constructor(private groceryservice: GroceryDataService) {}

  ngOnInit(): void {
    this.grocery = this.groceryservice.getGrocery();
  }
  deleteGrocery(id: number) {
    console.log(id);
    this.grocery = this.grocery.filter((g) => g.id !== id);
  }
  changeQuantity(id: number, data: number) {
    this.grocery = this.grocery.map((g) =>
      g.id === id
        ? {
            ...g,
            quantity:
              data > 0
                ? g.quantity + data
                : g.quantity > 0
                ? g.quantity + data
                : 0,
          }
        : g
    );
  }

  searchGrocery(eventData: Event) {
    console.log((<HTMLInputElement>eventData.target).value);
    this.grocery = this.grocery.filter((g) =>
      g.name
        .toLowerCase()
        .includes((<HTMLInputElement>eventData.target).value.toLowerCase())
    );
  }

  getTotal() {
    return this.grocery.length;
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.grocery.push({
      id: 45,
      name: form.value.name,
      quantity: form.value.quantity,
    });
    form.reset();
  }
  // onSubmit2() {
  //   console.log(this.groceryForm);
  //   this.grocery.push({
  //     id: 45,
  //     name: this.groceryForm.value.name!,
  //     quantity: this.groceryForm.value.quantity!,
  //   });
  // }
}

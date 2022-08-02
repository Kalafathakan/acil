import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';
import {
  GroceryDataService,
  IGrocery,
} from 'src/app/Services/grocery-data.service';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css'],
})
export class AddGroceryComponent implements OnInit {
  constructor(private myGrocery: GroceryDataService) {}

  ngOnInit(): void {}

  groceryForm = new FormGroup({
    name: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    quantity: new FormControl<number | null>(null, Validators.required),
  });

  onSubmit2() {
    console.log(this.groceryForm);

    this.myGrocery.addGrocery(
      this.groceryForm.value.name!,
      this.groceryForm.value.quantity!
    );
    // this.grocery.push({
    //   id: 45,
    //   name: this.groceryForm.value.name!,
    //   quantity: this.groceryForm.value.quantity!,
    // });
  }
}

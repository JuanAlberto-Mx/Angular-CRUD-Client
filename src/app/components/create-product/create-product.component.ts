import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  // Property to group the product information from the web form
  productForm: FormGroup;

  /**
   * Constructor with dependency injection.
   * @param formBuilder the instance with the required information of the product.
   */
  constructor(private formBuilder: FormBuilder) {
    // Creates a new group to set the information of the product based on the web form data
    this.productForm = this.formBuilder.group({
      
      // Establishes each property as required
      name: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  /**
   * Method to create a new product based on the information specified in the web form.
   */
  addProduct() {
    console.log(this.productForm);
  }
}

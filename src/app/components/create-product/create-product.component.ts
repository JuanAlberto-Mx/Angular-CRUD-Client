import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

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
   * @param router the instance to redirect the component to other site.
   * @param toastr the instance to display a message based on Toastr library.
   * @param productService the instance to enable the API product service communication.
   */
  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, private productService: ProductService) {
    // Creates a new group to set the information of the product based on the web form data
    this.productForm = this.formBuilder.group({

      // Establishes each property as required
      name: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  /**
   * Method to create a new product based on the information specified in the web form.
   */
  addProduct() {
    // Create a product class constant to set the product information
    const PRODUCT: Product = {
      name: this.productForm.get('name')?.value,
      category: this.productForm.get('category')?.value,
      location: this.productForm.get('location')?.value,
      price: this.productForm.get('price')?.value
    };

    // Printing the product in console
    console.log(PRODUCT);

    this.productService.createProduct(PRODUCT).subscribe(
      data => {
        // Displays a message by using the Toastr library 
        this.toastr.success('Product created successfully', 'Create product');

        // Establishes the target component to redirect the user interaction after a
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);

        // Reset the form in case of error
        this.productForm.reset();
      }
    );
  }
}

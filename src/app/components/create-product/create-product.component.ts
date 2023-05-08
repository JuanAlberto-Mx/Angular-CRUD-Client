import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  // Title of the page where the user is working
  title: string = "CREATE PRODUCT";

  // Variable to access the id of the product to edit or update
  id: string | null;

  /**
   * Constructor with dependency injection.
   * @param formBuilder the instance with the required information of the product.
   * @param router the instance to redirect the component to other site.
   * @param toastr the instance to display a message based on Toastr library.
   * @param productService the instance to enable the API product service communication.
   * @param aRoute the instance to access the id of the current product.
   */
  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, private productService: ProductService, private aRoute: ActivatedRoute) {
    // Creates a new group to set the information of the product based on the web form data
    this.productForm = this.formBuilder.group({

      // Establishes each property as required
      name: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required]
    });

    // Set the id variable to the current product id
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    // Call the updateProduct method to initialize the title of the section
    this.getProduct();
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

    if(this.id !== null) { // If id is different to NULL then the user select the update option
      this.productService.updateProduct(this.id, PRODUCT).subscribe(
        data => {
          // Displays a message by using the Toastr library 
          this.toastr.info('Product updated successfully', 'Update product');
  
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
    else { // If id is NULL then the user creates a new product
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

  /**
   * Method to update the web form elements information based on the selected product id.
   */
  getProduct() {
    // If the id is different to NULL then the Update icon is clicked by the user
    if(this.id !== null) {

      // The title section is changed from Create Product to Update Product
      this.title = "UPDATE PRODUCT";

      this.productService.getProduct(this.id).subscribe(
        data => {
          // The web form elements are filled with the selected product information
          this.productForm.setValue(
            {
              name: data.name,
              category: data.category,
              location: data.location,
              price: data.price
            }
          );
        }
      );
    }
  }
}

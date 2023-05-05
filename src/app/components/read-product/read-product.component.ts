import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.css']
})
export class ReadProductComponent implements OnInit {

  // Empty array to store the product list
  listProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  /**
   * Method to invoke the getProduct method whenever the application start.
   */
  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * Method to subscribe the API methods available.
   */
  getProducts() {
    this.productService.getProducts().subscribe(
      data => {
        console.log(data);
        
        // Set the listProducts variable to data parameter
        this.listProducts = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}

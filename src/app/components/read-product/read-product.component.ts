import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private productService: ProductService, private toastr: ToastrService) {}

  /**
   * Method to invoke the getProduct method whenever the application start.
   */
  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * Method to subscribe the GET API methods available.
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
    );
  }

  /**
   * Method to subscribe the DELETE API methods available.
   */
  deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe(
      data => {
        console.log(data);
        
        this.toastr.error('Product successfully deleted', 'Deleted Product');
        this.getProducts();
      },
      error => {
        console.log(error);
      }
    );
  }
}

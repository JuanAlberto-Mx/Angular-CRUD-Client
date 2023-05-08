import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Set the URL of the API
  url = 'http://localhost:4000/api/products/';

  // Dependency injection to enable the HTTP communication
  constructor(private http: HttpClient) {
    
  }

  /**
   * Method to access the GET products method of the API.
   * Observable allows making asynchronous requests.
   * @returns the observable reponse.
   */
  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  /**
   * Method to access the GET products method of the API in order to obtain the information of an existing product 
   * based on the id.
   * @param id the id number of the product to get.
   * @returns the observable response.
   */
  getProduct(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  /**
   * Method to access the DELETE method of the API in order to remove a specific product.
   * @param id the id number of the product to remove.
   * @returns the observable response.
   */
  deleteProduct(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  /**
   * Method to access the POST method of the API in order to create a new product.
   * @param product the product instance with the information to store.
   * @returns the observable response.
   */
  createProduct(product: Product): Observable<any> {
    return this.http.post(this.url, product);
  }

  /**
   * Method to access the PUT method of the API in order to update a specific product.
   * @param id the id product to update.
   * @param product the product instance with the new information of the product.
   * @returns the observable response.
   */
  updateProduct(id: string, product: Product): Observable<any> {
    return this.http.put(this.url + id, product);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Set the URL of the API
  url = 'http://localhost:4000/api/products';

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
   * Method to access the DELETE method of the API in order to remove a specific product.
   * @param id the id number of the product to remove.
   * @returns the observable response.
   */
  deleteProduct(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}

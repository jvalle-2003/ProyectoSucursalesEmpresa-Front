import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from 'src/app/services/user/user-rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.userRest.getToken()
  });

  constructor(
    private http: HttpClient,
    private userRest: UserRestService
  ) { }
  getProducts(){
    return this.http.get(environment.baseUrl + 'product/getProducts', {headers: this.httpOptions});
  }

  addProduct(params:{}){
    return this.http.post(environment.baseUrl + 'product/addProduct', params, {headers: this.httpOptions});
  }

  getProduct(id: string){
    return this.http.get(environment.baseUrl + 'product/getProduct/' + id, {headers: this.httpOptions})
  }
  
  updateProduct(id:string, params:{}){
    return this.http.put(environment.baseUrl + 'product/updateProduct/' + id, params, {headers: this.httpOptions});
  }

  deleteProduct(id:string){
    return this.http.delete(environment.baseUrl + 'product/deleteProduct/' + id, {headers: this.httpOptions});
  }

  getProductsByStockAsc(){
    return this.http.get(environment.baseUrl + 'product/getProductsByStockAsc', {headers: this.httpOptions});
  }

  getProductsByStockDesc(){
    return this.http.get(environment.baseUrl + 'product/getProductsByStockDesc', {headers: this.httpOptions});
  }

  getProductsByName(){
    return this.http.get(environment.baseUrl + 'product/getProductsByName', {headers: this.httpOptions});
  }

  getProductsByProvider(){
    return this.http.get(environment.baseUrl + 'product/getProductsByProvider', {headers: this.httpOptions});
  } 
}

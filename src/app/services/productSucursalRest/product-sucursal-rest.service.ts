import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../user/user-rest.service';
@Injectable({
  providedIn: 'root'
})
export class ProductSucursalRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization' : this.userRest.getToken()
  })

  constructor(
    private http: HttpClient,
    private userRest: UserRestService
  ) { }
   
  addProductBranch(params: {}) {
    return this.http.post(environment.baseUrl + 'productBranch/addProductsBranch', params, { headers: this.httpOptions });
  }

  getProductsBranch(enterpriseBranchId: string){
    return this.http.get(environment.baseUrl + 'productBranch/getProductsBranch/' + enterpriseBranchId, {headers: this.httpOptions});
  }

  getProductBranch(enterpriseBranchId: string, productBranchId: string){
    return this.http.get(environment.baseUrl + 'productBranch/getProductBranch/' + enterpriseBranchId + '/' + productBranchId, {headers: this.httpOptions});
  }

  saleOfProduct(params: {}){
    return this.http.post(environment.baseUrl + 'productBranch/saleOfProduct', params, {headers: this.httpOptions}); 
  }

}

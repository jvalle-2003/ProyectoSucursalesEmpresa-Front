import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from 'src/app/services/user/user-rest.service';



@Injectable({
  providedIn: 'root'
})
export class sucursalRestService {
  httpOptions = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.userRest.getToken())
  constructor(
    private http: HttpClient,
    private userRest: UserRestService
  ) { }
 
  getSucursales(){
    return this.http.get(environment.baseUrl + 'enterpriseBranch/getEnterprisesBranch', {headers: this.httpOptions});
  }

  getSucursal(id:string){
    return this.http.get(environment.baseUrl + 'enterpriseBranch/getEnterpriseBranch/' + id, {headers: this.httpOptions});
  }


  saveSucursal (params:{}){
    return this.http.post(environment.baseUrl + 'enterpriseBranch/addEnterpriseBranch', params, {headers: this.httpOptions});
  }
  
  updateSucursal (id: string, params:{}){
    return this.http.put(environment.baseUrl + 'enterpriseBranch/updateEnterpriseBrach/' + id, params, {headers: this.httpOptions});
  }

  deleteSucursal (id: string){
    return this.http.delete(environment.baseUrl + 'enterpriseBranch/deleteEnterpriceBranch/' + id, {headers: this.httpOptions});
  }

}

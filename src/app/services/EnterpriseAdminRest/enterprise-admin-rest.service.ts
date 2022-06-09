import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from 'src/app/services/user/user-rest.service';


@Injectable({
  providedIn: 'root'
})
export class EnterpriseAdminRestService 
{

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.userRest.getToken(),
  });

  constructor
  (
    private http : HttpClient,
    private userRest: UserRestService
  )
  {}


  //FUNCIONES DE ADMINISTRADOR//
  getEnterprises()
  {
    return this.http.get(environment.baseUrl + 'enterprise/getEnterprises', {headers: this.httpOptions});
  }

  getEnterprise(id : string)
  {
    return this.http.get(environment.baseUrl + 'enterprise/getEnterprise/' + id, {headers : this.httpOptions});
  }

  saveEnterprise(params : {})
  {
    return this.http.post(environment.baseUrl + 'enterprise/saveEnterprise', params, {headers: this.httpOptions});
  }

  deleteEnterprise(id : string)
  {
    return this.http.delete(environment.baseUrl + 'enterprise/deleteEnterprise/' + id, {headers: this.httpOptions});
  }

  updateEnterprise(id: string, params : {})
  {
    return this.http.put(environment.baseUrl + 'enterprise/updateEnterprise/' + id , params, {headers: this.httpOptions})
  }

}

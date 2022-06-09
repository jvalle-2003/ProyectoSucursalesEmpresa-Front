
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
    ) { }

  test(message: string){
    console.log(message);
  }

// Solicitudes HTTP propias de la entidad Usuario

  testHttp(){
    return this.http.get(environment.baseUrl + 'user/pruebaUser', {headers: this.httpOptions});
  
  }

  register(params: {}){
    let body = JSON.stringify(params);
    return this.http.post(environment.baseUrl + 'enterprise/register', body, {headers: this.httpOptions} );
  } 

  login(params: {}){
    let body = JSON.stringify(params);
    return this.http.post(environment.baseUrl + 'enterprise/login', body, {headers: this.httpOptions});
  }



  myEnterprise() {
    return this.http.get(environment.baseUrl + 'enterprise/myEnterprise', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.getToken(),
      },
    });
  }

  getEnterprises(){
    return this.http.get(environment.baseUrl+ 'enterprise/getEnterprises', {headers: this.httpOptions});
  }

  getEnterprise(id: string){
    return this.http.get(environment.baseUrl + 'enterprise/getEnterprise/'+id, {headers: this.httpOptions});
  }

  saveEnterprise(params: {}){
    return this.http.post(environment.baseUrl + 'enterprise/saveEnterprise', params, {headers:this.httpOptions});
  }

  updateEnterprise(params: {}) {
    return this.http.put(environment.baseUrl + 'enterprise/update', params, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.getToken(),
      },
    });
  }

  deleteEnterprise() {
    return this.http.delete(environment.baseUrl + 'enterprise/delete', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.getToken(),
      },
    });
  }

  getToken() {
    let globalToken = localStorage.getItem('token');
    let token;
    if (globalToken != undefined) {
      token = globalToken;
    } else {
      token = '';
    }
    return token;
  }

  getIdentity() {
    let globalIdentity = localStorage.getItem('identity');
    let identity;
    if (globalIdentity != undefined) {
      identity = JSON.parse(globalIdentity);
    } else {
      identity = '';
    }
    return identity;
  }
}


import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class CustomerService {

  localHttp:String = 'http://localhost:3000';

  constructor(
    private http:Http,
    private authService:AuthService
  ) { }

  getAllCustomers(){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/customers/all`, {headers: headers}).map(response => response.json());
  }

  getCustomerById(id){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.get(`${this.localHttp}/customers/${id}`, {headers: headers}).map(response => response.json());
  }

  createCustomer(newCustomer){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/customers/new`, JSON.stringify(newCustomer), {headers: headers}).map(response => response.json());
  }
}

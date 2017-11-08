import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class CustomerService {

  localHttp:String = 'http://localhost:3000/api/';
  // localHttp:String = 'api';
  
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

  getAllContacts(customerID){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/customers/${customerID}/contacts`, {headers: headers}).map(response => response.json());
  }

  getCustomerById(id){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.get(`${this.localHttp}/customers/${id}`, {headers: headers}).map(response => response.json());
  }

  deleteCustomer(id){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/customers/delete/${id}`, JSON.stringify({}), {headers: headers}).map(response => response.json());
  }

  deleteContact(contactID){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/customers/delete/contact/${contactID}`, JSON.stringify({}), {headers: headers}).map(response => response.json());
  }

  createCustomer(newCustomer){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/customers/new`, JSON.stringify(newCustomer), {headers: headers}).map(response => response.json());
  }

  createContact(newContact){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/customers/${newContact.customerID}/new/contact`, JSON.stringify(newContact), {headers: headers}).map(response => response.json());
  }

  updateCustomer(updatedCustomer){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/customers/update`, JSON.stringify(updatedCustomer), {headers: headers}).map(response => response.json());
  }

  updateContact(updatedContact){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/customers/update/contact`, JSON.stringify(updatedContact), {headers: headers}).map(response => response.json());
  }
}

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { CookieService } from 'ngx-cookie-service';
import { CookieStorage } from 'cookie-storage';

@Injectable()
export class AuthService {

  authToken:any;
  user:any;
  cookieStorage = new CookieStorage();
  // localHttp:String = 'http://localhost:3000/api';
  localHttp:String = 'api';

  constructor(
    private http:Http,
    private cookieService: CookieService
  ) { }

  registerUser(user){
    this.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.post(`${this.localHttp}/users/register`, JSON.stringify(user),{headers: headers}).map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(`${this.localHttp}/users/authenticate`, JSON.stringify(user),{headers: headers}).map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token); //jwt looks for id_token by default
    localStorage.setItem('user', JSON.stringify(user)); // local storage can only store strings
    // this.cookieStorage.setItem('id_token', token);
    // this.cookieStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    // this.cookieStorage.clear();
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    // const token = this.cookieStorage.getItem('id_token');
    this.authToken = token;
  }
}

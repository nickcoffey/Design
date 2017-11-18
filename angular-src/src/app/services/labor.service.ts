import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class LaborService {

  // localHttp: String = 'http://localhost:3000/api';
  localHttp:String = 'api';

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  getAllLabors() {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/labors/all`, { headers: headers }).map(response => response.json());
  }

  createLabor(newLabor) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/labors/new`, JSON.stringify(newLabor), { headers: headers }).map(response => response.json());
  }

  deleteLabor(id) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/labors/delete/${id}`, JSON.stringify({}), { headers: headers }).map(response => response.json());
  }

  updateLabor(updatedLabor) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/labors/update`, JSON.stringify(updatedLabor), { headers: headers }).map(response => response.json());
  }
}

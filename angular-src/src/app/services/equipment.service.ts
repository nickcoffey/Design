import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class EquipmentService {

  // localHttp: String = 'http://localhost:3000/api';
  localHttp:String = 'api';

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  getAllEquipments() {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/equipments/all`, { headers: headers }).map(response => response.json());
  }

  createEquipment(newEquipment) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/equipments/new`, JSON.stringify(newEquipment), { headers: headers }).map(response => response.json());
  }

  deleteEquipment(id) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/equipments/delete/${id}`, JSON.stringify({}), { headers: headers }).map(response => response.json());
  }

  updateEquipment(updatedEquipment) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/equipments/update`, JSON.stringify(updatedEquipment), { headers: headers }).map(response => response.json());
  }
}

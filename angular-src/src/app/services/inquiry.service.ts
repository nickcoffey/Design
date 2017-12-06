import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class InquiryService {

  // localHttp: String = 'http://localhost:3000/api';
  localHttp:String = 'api';

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  getAllInquiries() {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/inquiries/all`, { headers: headers }).map(response => response.json());
  }

  getInquiriesByCustomer(customerID) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/inquiries/all/customer/${customerID}`, { headers: headers }).map(response => response.json());
  }

  getInquiriesByDate(dates) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.localHttp}/inquiries/by-date`, JSON.stringify(dates), { headers: headers }).map(response => response.json());
  }

  getAllInquiriesTest() {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/inquiries/all`, { headers: headers });
  }

  getInquiryById(id) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/inquiries/${id}`, { headers: headers }).map(response => response.json());
  }

  createInquiry(newInquiry) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/inquiries/new`, JSON.stringify(newInquiry), { headers: headers }).map(response => response.json());
  }

  deleteInquiry(id) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/inquiries/delete/${id}`, JSON.stringify({}), { headers: headers }).map(response => response.json());
  }

  updateInquiry(updatedInquiry) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/inquiries/update`, JSON.stringify(updatedInquiry), { headers: headers }).map(response => response.json());
  }

  updateInquiryStatus(updatedInquiry) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/inquiries/update-status`, JSON.stringify(updatedInquiry), { headers: headers }).map(response => response.json());
  }

  /********************************************************************* FILE FUNCTIONS ***********************************************************************/
  getInquiryFilesByID(id) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/inquiries/${id}/files`, { headers: headers }).map(response => response.json());
  }

  deleteInquiryFile(id, file) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/inquiries/${id}/files/delete`, JSON.stringify(file), { headers: headers }).map(response => response.json());
  }
}

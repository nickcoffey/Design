import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class JobService {

  // localHttp:String = 'http://localhost:3000/api';
  localHttp:String = 'api';
  
  constructor(
    private http:Http,
    private authService:AuthService
  ) { }

  getAllJobs(){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/jobs/all`, {headers: headers}).map(response => response.json());
  }

  getJobById(id){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization',this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/jobs/${id}`, {headers: headers}).map(response => response.json());
  }

  getJobFilesByID(id) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization',this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/jobs/${id}/files`, {headers: headers}).map(response => response.json());
  }

  getCurrentJobs(){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/jobs/all/current`, {headers: headers}).map(response => response.json());
  }

  getCurrentJobsCosts(){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/jobs/all/current/costs`, {headers: headers}).map(response => response.json());
  }

  getJobMaterialsById(jobId){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization',this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/jobs/${jobId}/job-materials`, {headers: headers}).map(response => response.json());
  }

  getCurrentJobMaterialsCost(jobId){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization',this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/jobs/${jobId}/job-materials/cost`, {headers: headers}).map(response => response.json());
  }

  createJob(newJob){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/new`, JSON.stringify(newJob), {headers: headers}).map(response => response.json());
  }

  deleteJob(id){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/delete/${id}`, JSON.stringify({}), {headers: headers}).map(response => response.json());
  }

  updateJob(updatedJob){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/update`, JSON.stringify(updatedJob), {headers: headers}).map(response => response.json());
  }

  updateJobStatus(updatedJob){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/update-status`, JSON.stringify(updatedJob), {headers: headers}).map(response => response.json());
  }

  createJobMaterial(id, newJobMaterial){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/${id}/new/job-material`, JSON.stringify(newJobMaterial), {headers: headers}).map(response => response.json());
  }

  deleteJobMaterial(materialID, jobID){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/${jobID}/delete/job-material/${materialID}`, JSON.stringify({}), {headers: headers}).map(response => response.json());
  }

  deleteJobFile(id, file){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/${id}/files/delete`, JSON.stringify(file), {headers: headers}).map(response => response.json());
  }

  createChangeOrder(id, newChangeOrder){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/new/change-order/${id}`, JSON.stringify(newChangeOrder), {headers: headers}).map(response => response.json());
  }

  getChangeOrdersById(jobId){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/jobs/${jobId}/change-orders`, {headers: headers}).map(response => response.json());
  }

  deleteChangeOrder(changeID){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/delete/change-order/${changeID}`, JSON.stringify({}), {headers: headers}).map(response => response.json());
  }

  createRevenue(newRevenue){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/create/job-revenue`, JSON.stringify(newRevenue), {headers: headers}).map(response => response.json());
  }

  getRevenuesById(jobId){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/jobs/${jobId}/job-revenues`, {headers: headers}).map(response => response.json());
  }

  deleteRevenue(revenueID){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/remove/revenue/id/${revenueID}`, JSON.stringify({}), {headers: headers}).map(response => response.json());
  }

  createLabor(jobID, newLabor){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/${jobID}/create/job-labor`, JSON.stringify(newLabor), {headers: headers}).map(response => response.json());
  }

  getLaborsById(jobId){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/jobs/${jobId}/job-labors`, {headers: headers}).map(response => response.json());
  }

  deleteLabor(laborID){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/delete/job-labor/${laborID}`, JSON.stringify({}), {headers: headers}).map(response => response.json());
  }
}

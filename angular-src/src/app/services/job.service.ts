import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class JobService {

  localHttp:String = 'http://localhost:3000';

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

  getCurrentJobs(){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/jobs/all/current`, {headers: headers}).map(response => response.json());
  }

  getJobMaterialsById(jobId){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization',this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/jobs/${jobId}/job-materials`, {headers: headers}).map(response => response.json());
  }

  createJob(newJob){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/new`, JSON.stringify(newJob), {headers: headers}).map(response => response.json());
  }

  createJobMaterial(newJobMaterial){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/jobs/new/job-material`, JSON.stringify(newJobMaterial), {headers: headers}).map(response => response.json());
  }
}

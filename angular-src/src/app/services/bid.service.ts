import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class BidService {

  localHttp:String = 'http://localhost:3000/api';
  // localHttp:String = 'api';

  constructor(
    private http:Http,
    private authService:AuthService
  ) { }

  getAllBids(){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization',this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/bids/all`, {headers: headers}).map(response => response.json());
  }

  getBidById(id){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization',this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/bids/${id}`, {headers: headers}).map(response => response.json());
  }

  getBidMaterialsById(bidId){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization',this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/bids/${bidId}/bid-materials`, {headers: headers}).map(response => response.json());
  }

  createBid(newBid){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/new`, JSON.stringify(newBid), {headers: headers}).map(response => response.json());
  }

  deleteBid(id){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/delete/${id}`, JSON.stringify({}), {headers: headers}).map(response => response.json());
  }

  updateBid(updatedBid){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/update`, JSON.stringify(updatedBid), {headers: headers}).map(response => response.json());
  }

  createBidMaterial(newBidMaterial){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/new/bid-material`, JSON.stringify(newBidMaterial), {headers: headers}).map(response => response.json());
  }

  getCurrentBidMaterialsCost(bidID){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization',this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/bids/${bidID}/bid-materials/cost`, {headers: headers}).map(response => response.json());
  }

  updateBidStatus(updatedBid){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/update-status`, JSON.stringify(updatedBid), {headers: headers}).map(response => response.json());
  }

  createBidMaterialById(id, bidMaterial){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/${id}/new/bid-material`, JSON.stringify(bidMaterial), {headers: headers}).map(response => response.json());
  }

  deleteBidMaterial(bidMaterial){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/delete/bid-material`, JSON.stringify(bidMaterial), {headers: headers}).map(response => response.json());
  }
}

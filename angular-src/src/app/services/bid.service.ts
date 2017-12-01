import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class BidService {

  // localHttp: String = 'http://localhost:3000/api';
  localHttp:String = 'api';

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  /************************************************************** Bid ***************************************************************************************/

  getAllBids() {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/bids/all`, { headers: headers }).map(response => response.json());
  }

  getBidById(id) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/bids/${id}`, { headers: headers }).map(response => response.json());
  }

  createBid(newBid) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/new`, JSON.stringify(newBid), { headers: headers }).map(response => response.json());
  }

  deleteBid(id) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/delete/${id}`, JSON.stringify({}), { headers: headers }).map(response => response.json());
  }

  updateBid(updatedBid) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/update`, JSON.stringify(updatedBid), { headers: headers }).map(response => response.json());
  }

  updateBidStatus(updatedBid) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/update-status`, JSON.stringify(updatedBid), { headers: headers }).map(response => response.json());
  }

  /************************************************************** Bid Materials ***************************************************************************************/

  getBidMaterialsById(bidId) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/bids/${bidId}/bid-materials`, { headers: headers }).map(response => response.json());
  }

  createBidMaterial(newBidMaterial) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/new/bid-material`, JSON.stringify(newBidMaterial), { headers: headers }).map(response => response.json());
  }

  getCurrentBidMaterialsCost(bidID) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/bids/${bidID}/bid-materials/cost`, { headers: headers }).map(response => response.json());
  }

  createBidMaterialById(id, bidMaterial) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/${id}/new/bid-material`, JSON.stringify(bidMaterial), { headers: headers }).map(response => response.json());
  }

  deleteBidMaterial(bidMaterial) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/remove/material`, JSON.stringify(bidMaterial), { headers: headers }).map(response => response.json());
  }

  updateBidMaterial(updatedBidMaterial) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/change/material`, JSON.stringify(updatedBidMaterial), { headers: headers }).map(response => response.json());
  }

  /************************************************************** Bid Labors ***************************************************************************************/

  getBidLaborsById(bidId) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/bids/${bidId}/bid-labors`, { headers: headers }).map(response => response.json());
  }

  createBidLabor(newBidLabor) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/new/bid-labor`, JSON.stringify(newBidLabor), { headers: headers }).map(response => response.json());
  }

  getCurrentBidLaborsCost(bidID) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/bids/${bidID}/bid-labors/cost`, { headers: headers }).map(response => response.json());
  }

  createBidLaborById(id, bidLabor) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/${id}/new/bid-labor`, JSON.stringify(bidLabor), { headers: headers }).map(response => response.json());
  }

  deleteBidLabor(laborID) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/delete/bid-labor/${laborID}`, JSON.stringify({}), { headers: headers }).map(response => response.json());
  }

  updateBidLabor(updatedBidLabor) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/update/bid-labor`, JSON.stringify(updatedBidLabor), { headers: headers }).map(response => response.json());
  }

  /************************************************************** Bid Equipments ***************************************************************************************/

  getBidEquipmentsById(bidId) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/bids/${bidId}/bid-equipments`, { headers: headers }).map(response => response.json());
  }

  createBidEquipment(newBidEquipment) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/new/bid-equipment`, JSON.stringify(newBidEquipment), { headers: headers }).map(response => response.json());
  }

  getCurrentBidEquipmentsCost(bidID) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/bids/${bidID}/bid-equipments/cost`, { headers: headers }).map(response => response.json());
  }

  createBidEquipmentById(id, bidEquipment) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/${id}/new/bid-equipment`, JSON.stringify(bidEquipment), { headers: headers }).map(response => response.json());
  }

  deleteBidEquipment(equipmentID) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/delete/bid-equipment/${equipmentID}`, JSON.stringify({}), { headers: headers }).map(response => response.json());
  }

  updateBidEquipment(updatedBidEquipment) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/update/bid-equipment`, JSON.stringify(updatedBidEquipment), { headers: headers }).map(response => response.json());
  }

  /********************************************************************* FILE FUNCTIONS ***********************************************************************/
  getBidFilesByID(id) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.localHttp}/bids/${id}/files`, { headers: headers }).map(response => response.json());
  }

  deleteBidFile(id, file) {
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post(`${this.localHttp}/bids/${id}/files/delete`, JSON.stringify(file), { headers: headers }).map(response => response.json());
  }
}
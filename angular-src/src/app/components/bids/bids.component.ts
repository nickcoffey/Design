import { Component, OnInit } from '@angular/core';
import { BidService } from '../../services/bid.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {

  bids:any;
  pendingBids:any;
  pendingLength:any;
  acceptedBids:any;
  acceptedLength:any;
  declinedBids:any;
  declinedLength:any;

  constructor(
    private bidService:BidService,
    private router:Router
  ) { }

  ngOnInit() {
    this.bidService.getAllBids().subscribe((bids) => {
      this.bids = bids;
      console.log(this.bids);
      this.pendingBids = bids.pendingBids;
      this.pendingLength = bids.pendingBids.length;
      console.log('Pending '+this.pendingLength);
      this.acceptedBids = bids.acceptedBids;
      this.acceptedLength = bids.acceptedBids.length;
      console.log('Accepted '+this.acceptedLength);
      this.declinedBids = bids.declinedBids;
      this.declinedLength = bids.declinedBids.length;
      console.log('Declined '+this.declinedLength);
    });
  }

}

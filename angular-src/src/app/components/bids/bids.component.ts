import { Component, OnInit } from '@angular/core';
import { BidService } from '../../services/bid.service';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {

  bids:any;
  pendingBids:any;
  acceptedBids:any;
  declinedBids:any;

  constructor(
    private bidService:BidService
  ) { }

  ngOnInit() {
    this.bidService.getAllBids().subscribe((bids) => {
      this.bids = bids;
      this.pendingBids = bids.pendingBids;
      this.acceptedBids = bids.acceptedBids;
      this.declinedBids = bids.declinedBids;
    });
  }

}

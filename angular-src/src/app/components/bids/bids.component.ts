import { Component, OnInit } from '@angular/core';
import { BidService } from '../../services/bid.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {

  bids:any;
  bidsLength:any;
  pendingBids:any;
  pendingLength:any;
  acceptedBids:any;
  acceptedLength:any;
  declinedBids:any;
  declinedLength:any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  displayTable: Boolean = false;

  constructor(
    private bidService:BidService,
    private router:Router
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.bidService.getAllBids().subscribe((bids) => {
      this.bids = bids.bids;
      this.bidsLength = bids.bids.length;
      //console.log(this.bids);
      this.pendingBids = bids.pendingBids;
      this.pendingLength = bids.pendingBids.length;
      //console.log('Pending '+this.pendingLength);
      this.acceptedBids = bids.acceptedBids;
      this.acceptedLength = bids.acceptedBids.length;
      //console.log('Accepted '+this.acceptedLength);
      this.declinedBids = bids.declinedBids;
      this.declinedLength = bids.declinedBids.length;
      //console.log('Declined '+this.declinedLength);

      this.dtTrigger.next();
      this.displayTable = true;
    });
  }

}

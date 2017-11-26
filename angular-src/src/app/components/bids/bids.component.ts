import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BidService } from '../../services/bid.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit, AfterContentInit {

  bids: any;
  bidsLength: any;
  pendingBids: any;
  pendingLength: any;
  acceptedBids: any;
  acceptedLength: any;
  declinedBids: any;
  declinedLength: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  displayTable: Boolean = false;

  constructor(
    private bidService: BidService,
    private router: Router
  ) { }

  ngOnInit() {
    this.bidService.getAllBids().subscribe((bids) => {
      this.bids = bids.bids;
      this.bidsLength = bids.bids.length;
      // this.filterBids(bids);
      this.setupDataTable();
    });
  }

  ngAfterContentInit() {
    // this.applyTableColor();
  }

  applyTableColor() {
    this.bidService.getAllBids().subscribe(bids => {
      bids.bids.forEach(bid => {
        let id = bid.bidID;
        let status = bid.bidStatus;
        if (status == 'PENDING') {
          document.getElementById(id).classList.add('info');
        } else if (status == 'DECLINED') {
          document.getElementById(id).classList.add('danger');
        } else if (status == 'ACCEPTED') {
          document.getElementById(id).classList.add('success');
        }
      });
    });
  }

  setupDataTable(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [0, 'desc']
    };
    this.dtTrigger.next();
    this.displayTable = true;
  }

  filterBids(bids){
    this.pendingBids = bids.pendingBids;
    this.pendingLength = bids.pendingBids.length;
    this.acceptedBids = bids.acceptedBids;
    this.acceptedLength = bids.acceptedBids.length;
    this.declinedBids = bids.declinedBids;
    this.declinedLength = bids.declinedBids.length;
  }
}

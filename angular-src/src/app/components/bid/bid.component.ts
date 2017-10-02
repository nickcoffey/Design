import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BidService } from '../../services/bid.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  id:any;
  bid:any;
  bidMaterials:any;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private bidService:BidService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.bidService.getBidById(this.id).subscribe((bid) => {
      this.bid = bid;
    });
    this.bidService.getBidMaterialsById(this.id).subscribe((bidMaterials) => {
      this.bidMaterials = bidMaterials;
    });
  }
}

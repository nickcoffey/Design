import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BidService } from '../../services/bid.service';
import { MaterialService } from '../../services/material.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  id:any;
  bid:any;
  bidMaterials:any;

  createdDate:any;
  materials:any;
  selectedMaterials:SelectedMaterial[] = [];

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private bidService:BidService,
    private materialService:MaterialService,
    private jobService:JobService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.bidService.getBidById(this.id).subscribe((bid) => {
      this.bid = bid;
    });

    this.bidService.getBidMaterialsById(this.id).subscribe((bidMaterials) => {
      this.bidMaterials = bidMaterials;
    });

    this.materialService.getAllMaterials().subscribe((materials) => {
      this.materials = materials.materials;
    });
  }

  onAddMaterial(material){
    this.selectedMaterials.push(material);
  }

  onClear(){
    this.selectedMaterials = [];
  }

  onCreate(){
    const newJob = {
      bidID: this.id,
      createdDate: this.createdDate
    };
    const updatedBid = {
      bidID: this.id,
      bidStatus: "ACCEPTED"
    };

    this.jobService.createJob(newJob).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.ngOnInit();
      } else{
        console.log(data.msg);
      }
    });
    this.bidService.updateBidStatus(updatedBid).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.ngOnInit();
      } else{
        console.log(data.msg);
      }
    });

    this.router.navigate(['/jobs']);
  }

  onDelete(){
    this.bidService.deleteBid(this.id).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.router.navigate(['/bids']);
      } else{
        console.log(data.msg);
      }
    });
  }
}

interface SelectedMaterial {
  materialID: Number,
  materialName: String,
  quantity: Number,
  perUnitCost: Number
}
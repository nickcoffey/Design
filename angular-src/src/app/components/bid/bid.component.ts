import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BidService } from '../../services/bid.service';
import { MaterialService } from '../../services/material.service';
import { JobService } from '../../services/job.service';
import { InquiryService } from '../../services/inquiry.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  id:any;
  bid:any;
  bidMaterials:any;
  bidPrice:any;
  bidLabor:any;
  bidStatus:any;
  createdDate:any;
  endDate:any;
  materials:any;
  selectedMaterials:SelectedMaterial[] = [];

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private bidService:BidService,
    private materialService:MaterialService,
    private jobService:JobService,
    private inquiryService:InquiryService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.bidService.getBidById(this.id).subscribe((bid) => {
      this.bid = bid;
    });

    this.bidService.getBidMaterialsById(this.id).subscribe((bidMaterials) => {
      this.bidMaterials = bidMaterials;

      this.materialService.getAllMaterials().subscribe((materials) => {
        this.materials = materials.materials;

        for(let i = 0; i < this.materials.length; i++){
          for(let k = 0; k < this.bidMaterials.length; k++){
            if(this.materials[i].materialID == this.bidMaterials[k].materialID){
              this.materials.splice(i, 1);
            }
          }
        }
      });
    });
  }

  onAddMaterial(material, id){
    this.selectedMaterials.push(material);
    this.materials.splice(id, 1);
  }

  onRemoveMaterial(material, id){
    this.selectedMaterials.splice(id, 1);
    this.materials.push(material);
    //this.ngOnInit();
  }

  onClear(){
    this.selectedMaterials = [];
    this.ngOnInit();
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
      } else{
        console.log(data.msg);
      }
    });

    let updatedInquiry = {
      inquiryID: this.bid[0].inquiryID,
      inquiryStatus: "PENDING",
      removeEndDate: true
    };

    this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.router.navigate(['/bids']);
      } else{
        console.log(data.msg);
      }
    });
  }

  onDeleteBidMaterial(materialID, bidID){
    let bidMaterial = {
      materialID: materialID,
      bidID: bidID
    }

    console.log(bidMaterial);

    this.bidService.deleteBidMaterial(bidMaterial).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.ngOnInit();
      } else{
        console.log(data.msg);
      }
    });
  }

  onUpdate(){
    let updatedBid = {
      bidID: this.id,
      bidPrice: this.bidPrice,
      bidLabor: this.bidLabor,
      bidStatus: this.bidStatus,
      createdDate: this.createdDate,
      endDate: this.endDate
    }

    this.selectedMaterials.forEach(selectedMaterial => {
      this.bidService.createBidMaterialById(this.id, selectedMaterial).subscribe((data) => {
        if(data.success){
          console.log(data.msg);
        } else{
          console.log(data.msg);
        }
      });
    });

    this.bidService.updateBid(updatedBid).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
      } else{
        console.log(data.msg);
      }
    });
    this.onClear();

    this.ngOnInit();
  }
}

interface SelectedMaterial {
  materialID: Number,
  materialName: String,
  quantity: Number,
  perUnitCost: Number
}
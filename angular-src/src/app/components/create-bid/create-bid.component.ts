import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MaterialService } from '../../services/material.service';
import { BidService } from '../../services/bid.service';
import { InquiryService } from '../../services/inquiry.service';

@Component({
  selector: 'app-create-bid',
  templateUrl: './create-bid.component.html',
  styleUrls: ['./create-bid.component.css']
})
export class CreateBidComponent implements OnInit {

  bidPrice:any;
  createdDate:any;
  bidLabor:any;
  materials:any;
  selectedMaterials:SelectedMaterial[] = [];

  constructor(
    private materialService:MaterialService,
    private bidService:BidService,
    private inquiryService:InquiryService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
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
    const newBid = {
      inquiryID: this.route.snapshot.params['id'],
      bidLabor: this.bidLabor,
      bidPrice: this.bidPrice,
      createdDate: this.createdDate
    };
    const updatedInquiry = {
      inquiryID: this.route.snapshot.params['id'],
      inquiryStatus: "ACCEPTED"
    };

    this.bidService.createBid(newBid).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.ngOnInit();
      } else{
        console.log(data.msg);
      }
    });
    this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.ngOnInit();
      } else{
        console.log(data.msg);
      }
    });
    this.selectedMaterials.forEach(selectedMaterial => {
      this.bidService.createBidMaterial(selectedMaterial).subscribe((data) => {
        if(data.success){
          console.log(data.msg);
          this.ngOnInit();
        } else{
          console.log(data.msg);
        }
      });
    });

    this.router.navigate(['/bids']);
  }
}

interface SelectedMaterial {
  materialID: Number,
  materialName: String,
  quantity: Number,
  perUnitCost: Number
}
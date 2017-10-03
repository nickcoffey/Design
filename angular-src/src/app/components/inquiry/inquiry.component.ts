import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InquiryService } from '../../services/inquiry.service';
import { MaterialService } from '../../services/material.service';
import { BidService } from '../../services/bid.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  id:any;
  inquiry:any;

  bidPrice:any;
  createdDate:any;
  bidLabor:any;
  materials:any;
  selectedMaterials:SelectedMaterial[] = [];

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private inquiryService:InquiryService,
    private materialService:MaterialService,
    private bidService:BidService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.inquiryService.getInquiryById(this.id).subscribe((inquiry) => {
      this.inquiry = inquiry;
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
    const newBid = {
      inquiryID: this.id,
      bidLabor: this.bidLabor,
      bidPrice: this.bidPrice,
      createdDate: this.createdDate
    };
    const updatedInquiry = {
      inquiryID: this.id,
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
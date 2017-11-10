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

  id: any;
  inquiry: any;
  bidPrice: number;
  linearFeet: number = 0;
  createdDate: any;
  bidLabor: number = 0;
  materials: any;
  material: any;
  materialID: number;
  totalMaterialPrice: number = 0;
  margin: number = 0;
  // totalCost:number = 0;
  // selectedMaterials:SelectedMaterial[] = [];
  selectedMaterials1: SelectedMaterial[] = [];
  description: any;
  status: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private inquiryService: InquiryService,
    private materialService: MaterialService,
    private bidService: BidService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.inquiryService.getInquiryById(this.id).subscribe((inquiry) => {
      this.inquiry = inquiry;
      this.status = inquiry[0].inquiryStatus;
    });

    this.materialService.getAllMaterials().subscribe((materials) => {
      this.materials = materials.materials;
    });
  }

  // onAddMaterial(material, id){
  //   this.selectedMaterials.push(material);
  //   this.materials.splice(id, 1);
  // }

  onSelectMaterial(material, id) {
    // console.log(material);
    this.material = material;
    this.materialID = id;
  }

  onRemoveMaterial(material, id) {
    this.totalMaterialPrice -= (material.pricePerLinearFoot * material.linearFeet);
    this.selectedMaterials1.splice(id, 1);
    this.materials.push(material);
  }

  // onAddMaterial() {
  //   let selectedMaterial = {
  //     materialID: this.material.materialID,
  //     materialName: this.material.materialName,
  //     pricePerLinearFoot: this.material.pricePerLinearFoot,
  //     linearFeet: this.linearFeet
  //   };
  //   this.totalMaterialPrice += (selectedMaterial.pricePerLinearFoot * this.linearFeet);
  //   this.selectedMaterials1.push(selectedMaterial);
  //   this.materials.splice(this.materialID, 1);
  //   this.material = null;
  //   this.linearFeet = 0;
  // }

  onAddMaterial() {
    let selectedMaterial = {
      materialID: this.materials[this.materialID].materialID,
      materialName: this.materials[this.materialID].materialName,
      pricePerLinearFoot: this.materials[this.materialID].pricePerLinearFoot,
      linearFeet: this.linearFeet
    };
    this.totalMaterialPrice += (selectedMaterial.pricePerLinearFoot * this.linearFeet);
    this.selectedMaterials1.push(selectedMaterial);
    this.materials.splice(this.materialID, 1);
    this.material = null;
    this.linearFeet = 0;
  }
  
  onChangeMaterial(id) {
    // console.log(id);
    this.materialID = id;
  }

  onClear() {
    this.selectedMaterials1.forEach(selectedMaterial => {
      this.materials.push(selectedMaterial);
    });
    this.selectedMaterials1 = [];
    this.totalMaterialPrice = 0;
    this.bidLabor = 0;
    this.margin = 0;
    //this.ngOnInit();
  }

  // onRemoveMaterial(material, id){
  //   this.selectedMaterials.splice(id, 1);
  //   this.materials.push(material);
  // }

  // onClear(){
  //   this.selectedMaterials.forEach(selectedMaterial => {
  //     this.materials.push(selectedMaterial);
  //   });
  //   this.selectedMaterials = [];
  //   //this.ngOnInit();
  // }

  onCreate() {
    const newBid = {
      inquiryID: this.id,
      bidLabor: this.bidLabor,
      bidPrice: (1 + this.margin) * (this.totalMaterialPrice + this.bidLabor)
    };
    const updatedInquiry = {
      inquiryID: this.id,
      inquiryStatus: "ACCEPTED",
      removeEndDate: false
    };

    this.bidService.createBid(newBid).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });
    this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });
    // this.selectedMaterials.forEach(selectedMaterial => {
    //   console.log(selectedMaterial);
    //   this.bidService.createBidMaterial(selectedMaterial).subscribe((data) => {
    //     if(data.success){
    //       console.log(data.msg);
    //     } else{
    //       console.log(data.msg);
    //     }
    //   });
    // });
    this.selectedMaterials1.forEach(selectedMaterial => {
      console.log(selectedMaterial);
      this.bidService.createBidMaterial(selectedMaterial).subscribe((data) => {
        if (data.success) {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      });
    });

    this.onClear();
    // this.router.navigate([`/bids`]);
  }

  onUpdate() {
    let updatedInquiry = {
      inquiryID: this.id,
      description: this.description
    }

    this.inquiryService.updateInquiry(updatedInquiry).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });

    this.ngOnInit();
  }

  onDelete() {
    this.inquiryService.deleteInquiry(this.id).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.router.navigate(['/inquiries']);
      } else {
        console.log(data.msg);
      }
    });
  }
}

interface SelectedMaterial {
  materialID: number,
  materialName: String,
  linearFeet: number,
  pricePerLinearFoot: number
}
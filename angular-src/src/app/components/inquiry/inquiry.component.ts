import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InquiryService } from '../../services/inquiry.service';
import { MaterialService } from '../../services/material.service';
import { LaborService } from '../../services/labor.service';
import { BidService } from '../../services/bid.service';
import { constants } from 'fs';
declare var $;

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  /** INQUIRY **/
  id: number = null;
  inquiry: any;
  createdDate: string = '';
  status: string = '';
  description: string = '';
  /** BID **/
  margin: number = 0;
  /** LABOR **/
  bidPrice: number = 0;
  labors: any;
  labor: any;
  selectedLabors: SelectedLabor[] = [];
  laborHours: number = 0;
  laborID: number = null;
  totalLaborPrice: number = 0;
  /** MATERIALS **/
  materials: Material[];
  material: Material;
  materialID: number = null;
  linearFeet: number = 0;
  totalMaterialPrice: number = 0;
  selectedMaterials1: SelectedMaterial[] = []; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private inquiryService: InquiryService,
    private materialService: MaterialService,
    private laborService: LaborService,
    private bidService: BidService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getInquiry();
    this.getMaterials();
    this.getLabor();
  }

  /************************************ INQUIRY *********************************/
  getInquiry() {
    this.inquiryService.getInquiryById(this.id).subscribe((inquiry) => {
      this.inquiry = inquiry;
      this.status = inquiry[0].inquiryStatus;
    });
  }

  acceptInquiry(updatedInquiry) {
    this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });
  }

  clearDescription() {
    this.description = '';
  }

  onClickUpdate(){
    this.description = this.inquiry[0].description;
  }

  onUpdate() {
    let updatedInquiry = {
      inquiryID: this.id,
      description: this.description
    }

    this.inquiryService.updateInquiry(updatedInquiry).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.clearDescription();
        $('#update-modal').modal('hide');
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

  /************************************ BID *********************************/
  onCreate() {
    const updatedInquiry = {
      inquiryID: this.id,
      inquiryStatus: "ACCEPTED",
      removeEndDate: false
    };
    const newBid = {
      inquiryID: this.id,
      bidPrice: (1 + (this.margin/100)) * (this.totalMaterialPrice + this.totalLaborPrice)
    };

    this.createBid(newBid);
    this.acceptInquiry(updatedInquiry);
    this.createMaterials();
    this.createLabor();
    $('#create-bid-modal').modal('hide');
    this.onClear();
    this.router.navigate([`/bids`]);
  }

  createBid(newBid) {
    this.bidService.createBid(newBid).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });
  }

  /************************************ LABOR *********************************/
  getLabor() {
    this.laborService.getAllLabors().subscribe((labors) => {
      this.labors = labors.labors;
    });
  }

  createLabor() {
    this.selectedLabors.forEach((selectedLabor) => {
      this.bidService.createBidLabor(selectedLabor).subscribe((data) => {
        if (data.success) {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      });
    });
  }

  onAddLabor() {
    let selectedLabor = {
      roleID: this.labors[this.laborID].roleID,
      roleName: this.labors[this.laborID].roleName,
      roleWage: this.labors[this.laborID].roleWage,
      laborHours: this.laborHours
    };
    this.totalLaborPrice += (selectedLabor.roleWage * this.laborHours);
    this.selectedLabors.push(selectedLabor);
    this.labors.splice(this.laborID, 1);
    this.labor = null;
    this.laborHours = 0;
  }

  onRemoveLabor(labor, id) {
    this.totalLaborPrice -= (labor.laborHours * labor.roleWage);
    this.selectedLabors.splice(id, 1);
    this.labors.push(labor);
  }

  onChangeLabor(id) {
    this.laborID = id;
    // console.log(this.laborID);
  }

  /************************************ MATERIALS *********************************/
  getMaterials() {
    this.materialService.getAllMaterials().subscribe((materials) => {
      this.materials = materials.materials;
    });
  }

  createMaterials() {
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
  }

  onRemoveMaterial(material, id) {
    this.totalMaterialPrice -= ((material.pricePerUnit/material.linearFeetCoverage) * material.linearFeet);
    this.selectedMaterials1.splice(id, 1);
    this.materials.push(material);
  }

  onAddMaterial() {
    let selectedMaterial = {
      materialID: this.materials[this.materialID].materialID,
      materialName: this.materials[this.materialID].materialName,
      pricePerUnit: this.materials[this.materialID].pricePerUnit,
      linearFeetCoverage: this.materials[this.materialID].linearFeetCoverage,
      linearFeet: this.linearFeet
    };
    this.totalMaterialPrice += (selectedMaterial.pricePerUnit / selectedMaterial.linearFeetCoverage * this.linearFeet);
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
    this.selectedLabors.forEach((selectedLabor) => {
      this.labors.push(selectedLabor);
    });
    this.selectedLabors = [];
    this.totalLaborPrice = 0;
    this.selectedMaterials1 = [];
    this.totalMaterialPrice = 0;
    this.laborHours = 0;
    this.margin = 0;
    
    //this.ngOnInit();
  }
}

interface SelectedMaterial {
  materialID: number,
  materialName: String,
  linearFeet: number,
  pricePerUnit: number,
  linearFeetCoverage: number
}
interface SelectedLabor {
  roleID: number,
  roleName: String,
  roleWage: number,
  laborHours: number
}
interface Material {
  materialID: number,
  materialName: String,
  pricePerUnit: number,
  linearFeetCoverage: number
}


/****************************************** UNUSED CODE *******************************************/
  // onAddMaterial(material, id){
  //   this.selectedMaterials.push(material);
  //   this.materials.splice(id, 1);
  // }

  // onSelectMaterial(material, id) {
  //   // console.log(material);
  //   this.material = material;
  //   this.materialID = id;
  // }

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

    // totalCost:number = 0;
  // selectedMaterials:SelectedMaterial[] = [];